var chart = (function(){
    var $btn = document.querySelector('.chart_send'),
        $txt = document.querySelector('.chart_content'),
        $chartBox = document.querySelector('.chart-box__main');
    return {
        init: function() {
            this.event();
            // this.getData();
        },
        event: function() {
            var _this = this;
            $btn.onclick = function() {
                var val = $txt.value.trim();
                if(val != '') {
                    var $li = document.createElement('li');
                    $li.className = 'main__right';
                    var $span = document.createElement('span');
                    $span.className = 'main_bg';
                    var $text = document.createTextNode(val);
                    $span.appendChild($text);
                    $li.appendChild($span);
                    $span = document.createElement('span');
                    $span.className = 'main_avater';
                    var $img = document.createElement('img');
                    $img.src = 'img/qiqi.jpg';
                    $span.appendChild($img);
                    $li.appendChild($span);
                    $chartBox.appendChild($li);
                    // 计算滚动高度
                    $chartBox.scrollTop = $chartBox.scrollHeight - $chartBox.clientHeight;
                    // 清空文本框
                    _this.getData();
                    $txt.value = '';
                } else {
                    alert('输入内容不能为空')
                }
            };
            $txt.onkeydown = function(ev) {
                ev = ev || window.event;
                var keyCode = ev.keyCode || ev.which;
                if(ev.ctrlKey) {
                    if(keyCode == 13) {
                        // 点击按钮
                        $btn.click();
                    }
                }
            };
        },
        getData:function () {
            var _this=this;
            var params = {
                method: 'get',
                success:function(data){
                    data = JSON.parse(data);
                    _this.letsTalk(data.text);
                }
            };
            sendAjax('http://www.tuling123.com/openapi/api?key=89df5cde76634fe093645b3d7fd10e4d&info=' + $txt.value +'&userid=1234567', params);
        },
        letsTalk:function (data) {
            var $li=document.createElement('li');
            $li.className='main__left';
            var $span=document.createElement('span');
            $span.className='main_avater';
            var $img=document.createElement('img');
            $img.src='img/fangfang.jpg';
            $span.appendChild($img);
            $li.appendChild($span);
            $span=document.createElement('span');
            $span.className='main_bg';
            var $text=document.createTextNode(data);
            $span.appendChild($text);
            $li.appendChild($span);
            $chartBox.appendChild($li);
            $chartBox.scrollTop = $chartBox.scrollHeight - $chartBox.clientHeight;
        }

    }

}());
