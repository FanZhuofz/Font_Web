        var num = 0;  // 定义第一个输入的数据
        function jsq(num) {
            //获取当前输入
            if(num=="%"){
                document.getElementById('screenName').value=Math.round(document.getElementById('screenName').value)/100;
            }else{
                document.getElementById('screenName').value += document.getElementById(num).value;
            }
        }
        function eva() {
            //计算输入结果
            document.getElementById("screenName").value = eval(document.getElementById("screenName").value);
        }
        function clearNum() {
            //清0
            document.getElementById("screenName").value = null;
            document.getElementById("screenName").focus();
        }
        function tuiGe() {
            //退格
            var arr = document.getElementById("screenName");
            arr.value = arr.value.substring(0, arr.value.length - 1);
        }