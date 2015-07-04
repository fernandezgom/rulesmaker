package com.rulesmaker.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;

import com.rulesmaker.dao.inter.ILoginUserDAO;
import com.rulesmaker.repository.UserRoles;
import com.rulesmaker.repository.Users;
import com.rulesmaker.util.RulesmakerException;

@Repository
public class LoginUserDAO extends HibernateDaoSupport implements ILoginUserDAO {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	public final Session getBookfaceSession() {
		return this.getSessionFactory().getCurrentSession();
	}
	
	public boolean insertNewUser(String username, String password, String email) throws RulesmakerException {
		final Session session = this.getBookfaceSession();
		byte b=1;
		try {
			Users us=new Users();
			us.setUsername(username);
			us.setPassword(password);
			us.setEnabled(b);
			us.setEmail(email);
			session.saveOrUpdate(us);
			UserRoles ur= new UserRoles();
			ur.setRole("ROLE_USER");
			ur.setUsers(us);
			session.saveOrUpdate(ur);
			return true;
		} catch (Exception e){
			e.printStackTrace();
			throw new RulesmakerException(e);
		}
	}
	

}
