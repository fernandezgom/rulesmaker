package com.rulesmaker.util;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ResourceBundle;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.rulesmaker.vo.TaskVO;

public class TipFilesUtil {
	
	private static final Logger logger = LoggerFactory.getLogger(TipFilesUtil.class);
	
	/**
	 * JLF: Creates a TIP file and saves into the system 
	 */
    public static void createTIPFile(TaskVO task){
		logger.info("JLF --- createTIPFile --- Creates a TIP file and saves into the system ");
		ResourceBundle rb= ResourceBundle.getBundle("rulesmaker-config");
		String _TIPPATH=rb.getString("tippath");
        try {
        	JSONObject result = new JSONObject();
            JSONObject objDesc = new JSONObject();
            JSONArray array = new JSONArray();
//            obj.put("numerator", 5);
//            obj.put("denominator", 5);
//            obj.put("partition", 5);
//            obj.put("type", "MoonSet");
//            JSONObject pos = new JSONObject();
//            pos.put("x", -4);
//            pos.put("y", 0);
//            obj.put("position", pos);
//            obj.put("color", "yellow");
//            array.add(obj);
            //JLF: The initial model is empty
            result.put("initial_model", new JSONArray());
            // JLF: Initial Configuration
            JSONObject obj1 = new JSONObject();
            obj1.put("item", "lines");
            obj1.put("active", task.getInitConf().isLines());
            array.add(obj1);
            JSONObject obj2 = new JSONObject();
            obj2.put("item", "rectangles");
            obj2.put("active", task.getInitConf().isRectangles());
            array.add(obj2);
            JSONObject obj3 = new JSONObject();
            obj3.put("item", "sets");
            obj3.put("active", task.getInitConf().isSets());
            array.add(obj3);
            JSONObject obj4 = new JSONObject();
            obj4.put("item", "liquids");
            obj4.put("active", task.getInitConf().isLiquids());
            array.add(obj4);
            JSONObject obj5 = new JSONObject();
            obj5.put("item", "lab");
            obj5.put("active", task.getInitConf().isLab());
            array.add(obj5);
            JSONObject obj6 = new JSONObject();
            obj6.put("item", "change_color");
            obj6.put("active", task.getInitConf().isColour());
            array.add(obj6);
            JSONObject obj7 = new JSONObject();
            obj7.put("item", "copy");
            obj7.put("active", task.getInitConf().isCopy());
            array.add(obj7);
            JSONObject obj8 = new JSONObject();
            obj8.put("item", "find_equivalence");
            obj8.put("active", task.getInitConf().isEquivalence());
            array.add(obj8);
            JSONObject obj9 = new JSONObject();
            obj9.put("item", "find_parent");
            obj9.put("active", task.getInitConf().isParent());
            array.add(obj9);
            JSONObject obj10 = new JSONObject();
            obj10.put("item", "highlight");
            obj10.put("active", task.getInitConf().isHighlight());
            array.add(obj10);
            JSONObject obj11 = new JSONObject();
            obj11.put("item", "add");
            obj11.put("active", task.getInitConf().isAdd());
            array.add(obj11);
            JSONObject obj12 = new JSONObject();
            obj12.put("item", "subtract");
            obj12.put("active", task.getInitConf().isSubstract());
            array.add(obj12);
            result.put("initial_configuration", array);
            // JLF: Extra information
            result.put("extra_information", "");
            // JLF: Task Description
            objDesc.put("id", task.getIdTask());
            objDesc.put("title", task.getName());
            objDesc.put("desctiption", task.getDescription());
            objDesc.put("showAtStartup", "false");
            result.put("task_description", objDesc);
            FileWriter file = new FileWriter(_TIPPATH + task.getIdTask()+ ".tip");
            try {
                file.write(result.toJSONString());
                logger.info("Successfully Copied JSON Object to File..."+ task.getIdTask()+ ".tip");
                logger.debug("\nJSON Object: " + result);
     
            } catch (IOException e) {
                e.printStackTrace();
     
            } finally {
                file.flush();
                file.close();
            }
        } catch (Exception ex) {
        	logger.error(ex.toString());
        }
	}

}
