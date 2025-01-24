package com.itg.examp.job;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class BatchSchedule {
	@Autowired
	private final Job job = null;
	@Autowired
	private final JobLauncher jobLauncher = null;

	@Scheduled(cron = "0 0/1 * * * *") // 스케줄 실행 어노테이션 // cron = "초 분 시 일 월 요일 년도"
	public void runJob() {
		 System.out.println("스케줄 실행 ===="); 
		 try {
			jobLauncher.run(job, new JobParametersBuilder().toJobParameters());
		} catch (JobExecutionAlreadyRunningException | JobRestartException | JobInstanceAlreadyCompleteException
				| JobParametersInvalidException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
