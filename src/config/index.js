export default
{
  SITENAME: '杭州市足球协会联盟',
  SITELOGO: "足",
  COPYRIGHT: 'Ant Design Admin  ©2020 zuiidea',
  IPTLIT:{//input limit
    username: { reg:/^[0-9A-Za-z]{1,20}$/, msg:"要求数字字母不能超过位20位" },
    password:{ reg:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, msg:"要求8-20位数字与字母组合" },
    namea: { reg:/^[\d\w]+$/, msg:"要求数字或字母" },
    nameb: { reg:/^[-a-zA-z\u4e00-\u9fa5]{2,30}$/, msg:"要求2-30位中文、数字、字母或者短横线" },
    namec: { reg:/^[\u4e00-\u9fa5]{2,30}$/, msg:"要求2-30位中文" },
    cert: { reg:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, msg:"身份证输入不合法" },
    mobile: { reg:/^[\d]{11}$/, msg:"手机号输入不合法" },
    remark: { reg:/^[\u4e00-\u9fa5]{2,30}$/, msg:"要求2-30位汉字" },
  },
  DICT:{
    tname:"110",
    certtype:"120",
    cardtype:"140",
    cardyears:"129",
    codeoper:"94837",
  }
}
