<template>
    <div class='app'>
       <div class="head">메모 앱</div>
            <div class="body">
                <div v-if="mode==='list'">
                    <ul>
                        <li v-for="m in memos" v-bind:key='m.id' v-on:click="open(m.id)">{{m.content}}</li>
                    </ul>
                </div>
                <div class="write" v-else>
                    <textarea v-model="memo.content"></textarea>
                    <button class="savebtn" type="button" v-on:click="save()" v-bind:class="{'full' : mode==='write'}">저장</button>
                    <button class="removebtn" type="button" v-on:click="remove()" v-if="mode==='edit'">삭제</button>
                </div>
                <button class="addbtn" type="button" v-on:click="write()" v-if="mode==='list'">+</button>
            </div>

    </div>
</template>
<script>
export default({
     data(){ //vue 객체에서 바인딩하여 공유할 데이터들
       return{
		mode:'list', //SPA의 페이지 모드 설정
        memo: { //memo 관련 DTO
            id:null,
            content : null,
            regDate: null
        },
      memos: [
		{id:1,content:'일정-VUE학습',regDate:new Date()},
		{id:2,content:'일정-React학습',regDate:new Date()},
		{id:3,content:'일정-nodejs학습',regDate:new Date()}
         ] 
       } 
    },
    methods: { //뷰 객체의 메소드
        renew: function(val){
            return JSON.parse(JSON.stringify(val));//입력받은 객체를 복사한 새로운 객체 생성
        },
        open : function(id){
            for(var i in this.memos){
                if(this.memos[i].id === id){
                    this.memo = this.renew(this.memos[i]);
                    break;
                }
            }
            this.mode = 'edit';
        },
        write: function(){
            this.mode = 'write';
            this.memo = {
                id:null,
                content : null,
                regDate: null
            };
        },
        remove: function(){
        
        if(confirm('삭제하시겠습니까?')){
            for(var i in this.memos){
                    if(this.memos[i].id === this.memo.id){
                        this.memos.splice(i, 1);
                        break;
                    }
                }
                
            this.mode = 'list';
            localStorage.setItem('memos', JSON.stringify(this.memos));
            }
        },
        save: function(){
            var id = this.memos.length + 1;
            
            if(this.mode ==='write'){
            this.memos.push(
                {
                    id: id,
                    content: this.memo.content,
                    regDate: new Date()
                }
            );
            }
            else if(this.mode ==='edit'){
                for(var i in this.memos){
                    if(this.memos[i].id === this.memo.id){
                        this.memos[i] = this.renew(this.memo);
                        break;
                    }
                }
            }
            this.mode = 'list';
            localStorage.setItem('memos', JSON.stringify(this.memos)); //로컬에 JSON 형태로 값을 저장
        }
    },
    created: function(){ //뷰 객체의 생성자
        var memos = localStorage.getItem('memos');
        
        if(memos){
            this.memos = JSON.parse(memos); //JSON을 파싱해서 사용함.
        }
    }
})
</script>
<style>
.app > .head{
    font-size:20px;
    padding:20px;
    background: #07c;
    color: #fff;
    text-align: center;
    border-botton: 1px solid #ddd;
    font-weight: bold;
}

.app > .body ul{
    list-sytle: none;
    margin: 0;
    padding: 0;
}

.app > .body ul li{
    padding: 20px;
    font-size: 16px;
    border-bottom: 1px solid #ddd;
    cursor : pointer;
}

.app > .body .addbtn{
    display : inline-block;
    padding: 29px 19px 35px 19px;
    font-size: 38px;
    position: fixed;
    right: 10px;
    bottom: 10px;
    background: #07c;
    color: #fff;
    border:0;
    border-radius: 50%;
    line-height:0;
}

.app > .body > .write{
    padding: 10px;
}

.app > .body > .write textarea{
    width: 100%;
    height: 420px;
    max-width: 100%;
    font-size: 15px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
}
.app > .body > .write button{
    width: 49%;
    color: #fff;
    padding: 15px;
    border : 0;
}

.app > .body > .write .removebtn{
    background: #f60;
    float: right;
}

.app > .body > .write .savebtn.full{
    width: 100%;
}

.app > .body > .write .savebtn{
    background: #07c;
}
</style>