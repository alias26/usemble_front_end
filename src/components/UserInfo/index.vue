<template>
    <div id="userinfo">
        <div id="userimg">
            <img src="../../assets/photo31.jpg" />
        </div>
        <div>
            <div>
                <div id="host">호스트</div>
                <div id="id">myeonghwan57</div>
                <div id="intro">
                    <div>안녕하세요.</div>
                    <div>성남 인근에서 작고 아담한 와인모임을 진행하고 있습니다.</div>
                    <div>와인에 관심있으시면 참여해주세요.</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
img {
    border-radius: 50%;
    width: 60px;
}
#userinfo {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
}
#userimg {
    margin: 0 15px;
}
#host {
    font-size: 12px;
    font-weight: 900;
    color: grey;
}
#id {
    font-weight: 900;
}
#intro {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    color: grey;
}
</style>
