package com.itg.examp.job;


import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
public class BatchConfiguration {
	int count = 0;

	@Bean
	public Job helloJob(JobRepository jobRepository, Step helloStep) {
		return new JobBuilder("helloJob", jobRepository)
				.start(helloStep)
				.build();
	}

	@Bean
	public Step helloStep(JobRepository jobRepository, Tasklet helloTasklet,
			PlatformTransactionManager transactionManager) {
		return new StepBuilder("helloStep", jobRepository)
				.tasklet(helloTasklet, transactionManager)
				.allowStartIfComplete(true) // true이면 배치작업 반복
				.build();
	}

	@Bean
	public Tasklet helloTasklet() { // 배치작업수행
		return (contribution, chunkContext)->{
			count++;
			System.out.println(count+":: 스프링 배치작업 수행중 ...");
			return RepeatStatus.FINISHED;
		};
	}
}
