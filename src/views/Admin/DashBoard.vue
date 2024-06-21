<template>
    <div class="mb-5" id="dash">
        <div class="d-flex justify-content-center mt-5">
            <div id="box">
                <div class="d-flex" id="member_left">
                    <span id="membertxt">총 회원수</span>
                    <span id="membercnt">1200</span>
                </div>
                <div id="box_content" class="d-flex">
                    <div id="bar_grp">
                        <div id="bar_content" class="d-flex">
                            <span id="title">10대</span>
                            <div class="progress-bar">
                                <div class="progress-10"></div>
                            </div>
                            <span id="content">10%</span>
                        </div>
                        <div id="bar_content" class="d-flex">
                            <span id="title">20대</span>
                            <div class="progress-bar">
                                <div class="progress-20"></div>
                            </div>
                            <span id="content">40%</span>
                        </div>
                        <div id="bar_content" class="d-flex">
                            <span id="title">30대</span>
                            <div class="progress-bar">
                                <div class="progress-30"></div>
                            </div>
                            <span id="content">30%</span>
                        </div>
                        <div id="bar_content" class="d-flex">
                            <span id="title">40대</span>
                            <div class="progress-bar">
                                <div class="progress-40"></div>
                            </div>
                            <span id="content">15%</span>
                        </div>
                        <div id="bar_content" class="d-flex">
                            <span id="title">50대</span>
                            <div class="progress-bar">
                                <div class="progress-50"></div>
                            </div>
                            <span id="content">5%</span>
                        </div>
                    </div>
                    <div id="circle_grp">
                        <div>
                            <div id="circle_title1">
                                남자 <span><i id="m_color" class="bi bi-square-fill"></i></span>
                            </div>
                            <div id="circle_title1">
                                여자 <span><i id="w_color" class="bi bi-square-fill"></i></span>
                            </div>
                        </div>
                        <div id="pie"></div>
                    </div>
                </div>
            </div>
            <div id="box">
                <div class="d-flex" id="social_left">
                    <span id="socialtxt">전체 소셜링</span>
                    <span id="socialcnt">600</span>
                </div>
                <div id="box_content" class="d-flex">
                    <div id="bar_grp">
                        <div id="bar_content" class="d-flex">
                            <span id="title">모임</span>
                            <div class="progress-bar">
                                <div class="progress-10"></div>
                            </div>
                            <span id="content">10%</span>
                        </div>
                        <div id="bar_content" class="d-flex">
                            <span id="title">맛집</span>
                            <div class="progress-bar">
                                <div class="progress-20"></div>
                            </div>
                            <span id="content">40%</span>
                        </div>
                        <div id="bar_content" class="d-flex">
                            <span id="title">운동</span>
                            <div class="progress-bar">
                                <div class="progress-30"></div>
                            </div>
                            <span id="content">30%</span>
                        </div>
                        <div id="bar_content" class="d-flex">
                            <span id="title">여행</span>
                            <div class="progress-bar">
                                <div class="progress-40"></div>
                            </div>
                            <span id="content">15%</span>
                        </div>
                        <div id="bar_content" class="d-flex">
                            <span id="title">스터디</span>
                            <div class="progress-bar">
                                <div class="progress-50"></div>
                            </div>
                            <span id="content">5%</span>
                        </div>
                    </div>
                    <div id="circle_grp">
                        <div>
                            <div id="circle_title">
                                모임
                                <span
                                    ><i style="color: #6f4fff" class="bi bi-square-fill"></i
                                ></span>
                            </div>
                            <div id="circle_title">
                                맛집
                                <span
                                    ><i style="color: #4f98ff" class="bi bi-square-fill"></i
                                ></span>
                            </div>
                            <div id="circle_title">
                                운동
                                <span
                                    ><i style="color: #e76fff" class="bi bi-square-fill"></i
                                ></span>
                            </div>
                            <div id="circle_title">
                                여행
                                <span
                                    ><i style="color: #5ace8e" class="bi bi-square-fill"></i
                                ></span>
                            </div>
                            <div id="circle_title">
                                스터디
                                <span
                                    ><i style="color: #e5ff72" class="bi bi-square-fill"></i
                                ></span>
                            </div>
                        </div>
                        <div id="pie2"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <div id="box">
                <div class="d-flex">
                    <span id="socialtxt">전체 리뷰</span>
                    <span id="socialcnt">200</span>
                </div>
                <table class="table table-bordered text-center">
                    <tr style="height: 50px">
                        <th style="width: 40px">번호</th>
                        <th style="width: 100px">내용</th>
                        <th style="width: 40px">날짜</th>
                        <th style="width: 40px">작성자</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><RouterLink to="">너무 재밌었어요~</RouterLink></td>
                        <td>24.06.17</td>
                        <td>김명환</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><RouterLink to="">다양한 사람들을 볼수 있어요</RouterLink></td>
                        <td>24.06.17</td>
                        <td>김명환</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><RouterLink to="">흥미로운 주제 추천합니다.</RouterLink></td>
                        <td>24.06.17</td>
                        <td>김명환</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><RouterLink to="">생각보다 재미 없었어요</RouterLink></td>
                        <td>24.06.17</td>
                        <td>김명환</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><RouterLink to="">너무 재밌었어요~</RouterLink></td>
                        <td>24.06.17</td>
                        <td>김명환</td>
                    </tr>
                </table>
            </div>
            <div id="box">
                <div class="d-flex">
                    <span id="socialtxt">공지사항</span>
                </div>
                <div>
                    <table class="table table-bordered text-center">
                        <tr style="height: 50px">
                            <th style="width: 40px">번호</th>
                            <th style="width: 220px">제목</th>
                            <th style="width: 40px">날짜</th>
                            <th style="width: 40px">작성자</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><RouterLink to="">후기 작성 및 이벤트 참여 관련</RouterLink></td>
                            <td>24.06.17</td>
                            <td>user1@naver.com</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><RouterLink to="">결제 관련</RouterLink></td>
                            <td>24.06.18</td>
                            <td>user1@naver.com</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><RouterLink to="">호스트 관련</RouterLink></td>
                            <td>24.06.19</td>
                            <td>user1@naver.com</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><RouterLink to="">문의 관련</RouterLink></td>
                            <td>24.06.20</td>
                            <td>user1@naver.com</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><RouterLink to="">후기 작성 및 이벤트 참여 관련</RouterLink></td>
                            <td>24.06.21</td>
                            <td>user1@naver.com</td>
                        </tr>
                    </table>
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
    width: 50%;
    border-radius: 10px;
    height: 250px;
    margin-right: 20px;
    border: solid;
}
#box_content {
    height: 80%;
}
#membertxt {
    color: #558ccf;
    font-size: 20px;
    font-weight: 900;
    margin-left: 10px;
}
#membercnt {
    color: black;
    font-size: 20px;
    font-weight: 900;
    margin-left: 10px;
}

#bar_grp {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 40%;
    margin: auto;
}
#bar_content {
    margin: auto;
    width: 100%;
}
#circle_grp {
    width: 50%;
    display: flex;
}
#pie {
    display: inline-block;
    width: 180px;
    height: 180px;
    margin: 0 auto;
    background: conic-gradient(#4f98ff 0% 65%, #5ace8e 65% 100%);
    border-radius: 50%;
}
#pie2 {
    display: inline-block;
    width: 180px;
    height: 180px;
    margin: 0 auto;
    background: conic-gradient(
        #6f4fff 0% 10%,
        #4f98ff 10% 50%,
        #e76fff 50% 80%,
        #5ace8e 80% 95%,
        #e5ff72 95% 100%
    );
    border-radius: 50%;
}
#socialtxt {
    color: #558ccf;
    font-size: 20px;
    font-weight: 900;
    margin-left: 10px;
}
#socialcnt {
    color: black;
    font-size: 20px;
    font-weight: 900;
    margin-left: 10px;
}
.progress-bar {
    width: 60%;
    height: 15px;
    background-color: #eeeeee;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.8rem;
    margin: auto 0;
    margin-left: 5px;
}
.progress-bar .progress-10 {
    width: 10%;
    height: 15px;
    padding: 0;
    text-align: center;
    background-color: #4f98ff;
    border-radius: 4px;
    color: #111;
}
.progress-bar .progress-20 {
    width: 40%;
    height: 15px;
    padding: 0;
    text-align: center;
    background-color: #4f98ff;
    border-radius: 4px;
    color: #111;
}
.progress-bar .progress-30 {
    width: 30%;
    height: 15px;
    padding: 0;
    text-align: center;
    background-color: #4f98ff;
    border-radius: 4px;
    color: #111;
}
.progress-bar .progress-40 {
    width: 10%;
    height: 15px;
    padding: 0;
    text-align: center;
    background-color: #4f98ff;
    border-radius: 4px;
    color: #111;
}
.progress-bar .progress-50 {
    width: 5%;
    height: 15px;
    padding: 0;
    text-align: center;
    background-color: #4f98ff;
    border-radius: 4px;
    color: #111;
}
#title {
    font-weight: 700;
}
#content {
    font-weight: 500;
}
#m_color {
    color: #4f98ff;
}
#w_color {
    color: #5ace8e;
}
#circle_title {
    font-size: 14px;
}
</style>
