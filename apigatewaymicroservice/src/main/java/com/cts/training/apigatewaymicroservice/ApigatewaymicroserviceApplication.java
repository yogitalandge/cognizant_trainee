package com.cts.training.apigatewaymicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableEurekaClient
@EnableZuulProxy
public class ApigatewaymicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApigatewaymicroserviceApplication.class, args);
	}

}
