package com.rulesmaker.util;

public class RulesmakerException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * Exception father, If applies.
	 */
	private Exception exception;
	
	public RulesmakerException(Exception exception) {
		super();
		this.exception = exception;
	}

	/**
	 * Private constructor .
	 */
	private RulesmakerException() {
		super();
	}


	public Exception getException() {
		return exception;
	}


	public void setException(Exception exception) {
		this.exception = exception;
	}

}
