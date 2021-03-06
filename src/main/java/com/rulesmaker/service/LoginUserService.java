package com.rulesmaker.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rulesmaker.dao.inter.ILoginUserDAO;
import com.rulesmaker.service.inter.ILoginUserService;
import com.rulesmaker.util.RulesmakerException;

@Service("loginUserService")
@Transactional(rollbackFor = { RulesmakerException.class, RulesmakerException.class })
public class LoginUserService implements ILoginUserService {

	private static final Logger logger = LoggerFactory
			.getLogger(LoginUserService.class);

	public ILoginUserDAO loginUserDAO;

	@Autowired
	public LoginUserService(ILoginUserDAO loginUserDAO) {
		this.loginUserDAO = loginUserDAO;
	}

	public boolean insertNewUser(String username, String password, String email) throws RulesmakerException {
		try {
			return getLoginUserDAO().insertNewUser(username, password, email);
		} catch (Exception e) {
			logger.error(e.toString());
		}
		return false;
	}

	public ILoginUserDAO getLoginUserDAO() {
		return loginUserDAO;
	}

	public void setLoginUserDAO(ILoginUserDAO loginUserDAO) {
		this.loginUserDAO = loginUserDAO;
	}

}
