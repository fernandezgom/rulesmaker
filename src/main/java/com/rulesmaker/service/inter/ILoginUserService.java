package com.rulesmaker.service.inter;

import com.rulesmaker.util.RulesmakerException;

public interface ILoginUserService {
	
	public boolean insertNewUser(String username, String password, String email) throws RulesmakerException;

}
