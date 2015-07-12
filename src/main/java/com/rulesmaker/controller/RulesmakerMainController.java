/**
 * 
 */
package com.rulesmaker.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.rulesmaker.util.TipFilesUtil;
import com.rulesmaker.vo.TaskVO;

/**
 * Handles and retrieves the login or denied page depending on the URI template
 */
@Controller
public class RulesmakerMainController {

	private static final Logger logger = LoggerFactory.getLogger(RulesmakerMainController.class);

	@RequestMapping(value = "/main**", method = RequestMethod.GET)
	public ModelAndView mainPage() {
		ModelAndView model = new ModelAndView();
		User us = (User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	    String name = us.getUsername();
		model.setViewName("main");
		return model;
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView login(
			@RequestParam(value = "error", required = false) String error,
			@RequestParam(value = "logout", required = false) String logout) {

		ModelAndView model = new ModelAndView();
		if (error != null) {
			model.addObject("error", "Invalid username and password!");
		}

		if (logout != null) {
			model.addObject("msg", "You've been logged out successfully.");
		}
		model.setViewName("login");

		return model;

	}
	
	@RequestMapping(value = "/fractionsLab", method = RequestMethod.GET)
	public ModelAndView getFractionsLab() {
		ModelAndView model = new ModelAndView();
		try {
			//TipFilesUtil.createTIPFile(currentExerciseName, ec.getExercise().get(currentExerciseName));
			model.addObject("taskName", "Initial Task to test the rules");
			model.addObject("idTask", "task22");
			model.setViewName("fractionsLabViews/GenericFL");
			return model;
		} catch (Exception e){
			logger.info("Returning to login due previous errors");
			logger.error(e.toString());
			model.setViewName("redirect:/login");
			return new ModelAndView();
		}
	}
	
	@RequestMapping(value = "/rulesMaker", method = RequestMethod.GET)
	public ModelAndView getRulesMaker() {
		ModelAndView model = new ModelAndView();
		try {
			model.addObject("taskName", "Rules Maker main view");
			model.setViewName("generalViews/GenericRM");
			return model;
		} catch (Exception e){
			logger.info("Returning to login due previous errors");
			logger.error(e.toString());
			model.setViewName("redirect:/login");
			return new ModelAndView();
		}
	}
	
	@RequestMapping(value = "/rulesMaker/initModel", method = RequestMethod.GET)
	public ModelAndView getInitialModel() {
		ModelAndView model = new ModelAndView();
		try {
			model.addObject("taskName", "Rules Maker main view");
			model.setViewName("generalViews/initModel");
			return model;
		} catch (Exception e){
			logger.info("Returning to login due previous errors");
			logger.error(e.toString());
			model.setViewName("redirect:/login");
			return new ModelAndView();
		}
	}
	
	@RequestMapping(value = "/rulesMaker/initConf", method = RequestMethod.GET)
	public ModelAndView getInitialConfiguration() {
		ModelAndView model = new ModelAndView();
		try {
			model.addObject("taskName", "Rules Maker main view");
			model.setViewName("generalViews/initConf");
			return model;
		} catch (Exception e){
			logger.info("Returning to login due previous errors");
			logger.error(e.toString());
			model.setViewName("redirect:/login");
			return new ModelAndView();
		}
	}
	
	
	@RequestMapping(value = "/rulesMaker/submitInitial", method = RequestMethod.POST)
	public @ResponseBody void insertNextExercise(@RequestBody TaskVO task){
		try {
			
			TipFilesUtil.createTIPFile(task);
			
		} catch (Exception e){
			logger.error(e.toString());
		}
	}

}