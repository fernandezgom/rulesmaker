package com.rulesmaker.dao.inter;

import com.rulesmaker.util.RulesmakerException;

public interface ILoginUserDAO {
	
	public boolean insertNewUser(String username, String password, String email) throws RulesmakerException;

}
