<template>
    <div class="container">
        <div>
            <h1>선택한 남의 집</h1>
            <div class="mt-4">
                <div class="d-flex justify-content-between mb-4">
                    <div class="d-flex flex-column justify-content-between">
                        <h2>20대의 이색소개팅</h2>
                        <div>
                            <div class="d-flex">
                                <p class="subtext">날짜&nbsp;&nbsp;</p>
                                <p>2023.06.15</p>
                            </div>
                            <div class="d-flex">
                                <p class="subtext">장소&nbsp;&nbsp;</p>
                                <p>서울특별시 마포구 와우산로29가길 84</p>
                            </div>
                        </div>
                    </div>
                    <img src="@/assets/와인바4.jpg" width="30%" />
                </div>
            </div>
        </div>
        <hr />
        <div class="mt-4 mb-2">
            <h2>결제금액</h2>
            <div>
                <div class="d-flex justify-content-between">
                    <p class="subtext">결제금액</p>
                    <p class="paytext">25,000원</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="subtext">총 금액</p>
                    <p class="subtext">25,000원</p>
                </div>
            </div>
        </div>
        <button class="btn paybtn">결제하기</button>
    </div>
</template>

<script setup></script>

<style scoped>
p {
    margin: auto 0;
}

hr {
    color: #707070;
}

h1 {
    font-size: 26px;
    font-weight: 700;
}

h2 {
    font-size: 22px;
    font-weight: 600;
}

.container {
    width: 50%;
    min-width: 700px;
    margin: 0 auto;
    margin-bottom: auto;
    margin-top: auto;
}

.subtext {
    color: #707070;
}

.paytext {
    color: #558ccf;
    font-size: 22px;
}

.paybtn {
    padding: 0 45%;
    height: 60px;
    color: #fff;
    background-color: #558ccf;
    font-weight: 700;
    font-size: 18px;
    line-height: 90%;
    margin-top: 20px;
}
</style>
