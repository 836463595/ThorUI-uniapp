export default {
	/**
	 * [通过参数名获取url中的参数值]
	 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
	 * @param  {[string]} queryName [参数名]
	 * @return {[string]}           [参数值]
	 */
	getQueryValue(queryName) {
	    let reg = new RegExp("(^|&)" + queryName + "=([^&]*)(&|$)", "i");
	    let r = window.location.search.substr(1).match(reg);
	    if ( r != null ){
        return decodeURI(r[2]);
	    }else{
        return null;
	    }
	}
}