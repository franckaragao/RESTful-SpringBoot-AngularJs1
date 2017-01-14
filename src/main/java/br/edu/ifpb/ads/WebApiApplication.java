package br.edu.ifpb.ads;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import br.edu.ifpb.ads.ws.filter.TokenFilter;

@SpringBootApplication
public class WebApiApplication {

	@Bean
	public FilterRegistrationBean filterJwt() {
		
		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new TokenFilter());
		filterRegistrationBean.addUrlPatterns("/admin/*");
		
		return filterRegistrationBean;
	}
	
	public static void main(String[] args) {
		SpringApplication.run(WebApiApplication.class, args);
	}
	
}
