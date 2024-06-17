<template>
    <div class="mb-5" id="dash">
        <div class="d-flex justify-content-center mt-5">
            <div id="box">
                <div class="d-flex" id="member_left">
                    <span id="membertxt">총 회원수</span>
                    <span id="membercnt">1200</span>
                </div>
                <div class="d-flex">
                    <div id="bar_grp">
                        <div class="zt-skill-bar">
                            <div data-width="20">10대<span>20</span></div>
                        </div>
                        <div class="zt-skill-bar">
                            <div data-width="20">20대<span>20</span></div>
                        </div>
                        <div class="zt-skill-bar">
                            <div data-width="20">30대<span>20</span></div>
                        </div>
                        <div class="zt-skill-bar">
                            <div data-width="20">40대<span>20</span></div>
                        </div>
                        <div class="zt-skill-bar">
                            <div data-width="20">50대<span>20</span></div>
                        </div>
                    </div>
                    <div id="circle_grp">
                        <div>남자</div>
                        <div>여자</div>
                    </div>
                </div>
            </div>
            <div id="box">
                <div class="d-flex" id="social_left">
                    <span id="socialtxt">전체 소셜링</span>
                    <span id="socialcnt">600</span>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <div id="box">
                <div class="d-flex" id="social_left">
                    <span id="socialtxt">전체 리뷰</span>
                    <span id="socialcnt">200</span>
                </div>
            </div>
            <div id="box">
                <div class="d-flex" id="social_left">
                    <span id="socialtxt">공지사항</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
#dash {
    display: flex;
    flex-direction: column;
}
#box {
    width: 40%;
    border-radius: 10px;
    height: 230px;
    margin-right: 20px;
    border: solid;
}
#membertxt {
    color: #558ccf;
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
}
#membercnt {
    color: black;
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
}
#member_left {
}
#bar_grp {
    width: 50%;
}
#circle_grp {
    width: 50%;
}
#social_left {
}
#socialtxt {
    color: #558ccf;
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
}
#socialcnt {
    color: black;
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
}
</style>
