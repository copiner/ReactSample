### Sample

View---------->Action--------->State

  |                               |

  |---------------<---------------|


### react-router
react-router 封装的这些组件，是不允许你自定义传props的。只支持那几个固定的，比如history，
params，location，route等等，都是跟路径参数有关的。
如果想传一些自定义的数据，可以结合redux，直接connect往组件里传store。。
因为你直接给Router或者Route穿props 其实是给了Router组件，它不会帮你做注入props。
可以自己尝试封装一层
