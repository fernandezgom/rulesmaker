package com.rulesmaker.vo;

import java.util.ArrayList;
import java.util.List;

public class TaskVO {
	
	private String name;
	private String idTask;
	private String description;
	private List<InitialModelVO> initModels= new ArrayList<InitialModelVO>();
	private InitialConfiguration initConf= new InitialConfiguration();
	private List<RuleVO> rules = new ArrayList<RuleVO>();
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<InitialModelVO> getInitModels() {
		return initModels;
	}
	public void setInitModels(List<InitialModelVO> initModels) {
		this.initModels = initModels;
	}
	public InitialConfiguration getInitConf() {
		return initConf;
	}
	public void setInitConf(InitialConfiguration initConf) {
		this.initConf = initConf;
	}
	public List<RuleVO> getRules() {
		return rules;
	}
	public void setRules(List<RuleVO> rules) {
		this.rules = rules;
	}
	public String getIdTask() {
		return idTask;
	}
	public void setIdTask(String idTask) {
		this.idTask = idTask;
	}
	
	

}
