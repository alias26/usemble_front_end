<template>
    <div class="content p-2">
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div class="d-flex">
                        <div class="profile-img me-3">
                            <img src="../../assets/logo.png" width="100px" height="100px" />
                        </div>
                        <div class="profile">
                            <p class="subtext mt-2 mb-2" style="font-size: 16px">사용자</p>
                            <h4>사용자이름</h4>
                            <p class="subtext mt-2 mb-2">2023.01 가입</p>
                        </div>
                    </div>
                    <div class="mt-1">
                        <button class="like bi bi-heart fs-4"></button>
                    </div>
                </div>
                <hr />
                <div class="d-flex">
                    <div class="dashboard">
                        <p class="subtext">팔로우한 사용자의 수</p>
                        <h5>X개</h5>
                    </div>
                    <div class="vr"></div>
                    <div class="dashboard">
                        <p class="subtext">주최한 어셈블의 수</p>
                        <h5>X개</h5>
                    </div>
                    <div class="vr"></div>
                    <div class="dashboard">
                        <p class="subtext">함께한 분들의 후기</p>
                        <h5>X개</h5>
                    </div>
                </div>
                <hr />
                <div class="mt-5 mb-5">
                    <p class="subtext">자기소개입니다.</p>
                </div>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
                <h5>사용자이름님이 진행 중인 어셈블</h5>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
                <h5>사용자이름님이 진행한 어셈블</h5>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
                <h5>함께한 분들의 후기 N</h5>
                <div>
                    <div>
                        <p class="subtext mb-1">어셈블 제목</p>
                        <p class="subtext">이름 | 2023.4.29 참여</p>
                    </div>
                    <pre>진짜 너무 재미있는 시간이였습니다!</pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.subtext {
    color: #707070;
    font-weight: 700;
    font-size: 14px;
}

h4,
h5 {
    font-weight: 700;
}

h5 {
    font-size: 18px;
    margin: 14px 0px;
}

.content {
    background-color: #efefef;
}

.card {
    width: 60%;
    margin: 30px auto;
}

.profile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.profile-img {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50px 50px;
}

.dashboard {
    text-align: center;
    margin: 0 auto;
    width: 33.3%;
}

.like {
    border: 0;
    background-color: #fff;
    border-radius: 10px;
}
</style>
