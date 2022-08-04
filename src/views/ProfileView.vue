<template>
  <el-tabs type="card" @tab-click="handleClick">
    <el-tab-pane label="Thông tin cá nhân">
      <el-row>
        <el-col :span="12">
            <div class="grid-content bg-purple" style="text-align: center;">
                <!-- <img class="img-avatar" src="https://www.google.com/search?q=h%C3%ACnh+%E1%BA%A3nh+s%C6%A1n+t%C3%B9ng&rlz=1C1GGRV_enVN870VN870&sxsrf=ALiCzsY_6cV7i3LpwEShDBlOQYsc6lKtDA:1659624356451&tbm=isch&source=iu&ictx=1&vet=1&fir=jRzy6IelKTvQaM%252CMRO1l_DxIItV_M%252C_%253BU29tRVBFJ81IoM%252CpwngVNzypdU_eM%252C_%253BxZDzCVzbOs1RjM%252CVqjkGCHimHcKJM%252C_%253B06eU3eQx_bBf-M%252CJd7J0_TDhQOczM%252C_%253BOt5XQ6DAo9xvgM%252C3o7ZhQglT0JBbM%252C_%253B1TYhXzn8Ci7GuM%252Cu7-m-LpvaKLOiM%252C_%253BdvMzqmOjFDAzyM%252CSfEv6f3N5k18mM%252C_%253BsM4YeQ9ZVs7wIM%252CkquSWUlUiMjAbM%252C_%253Bax-KrtmqE1EqSM%252Ci6Ub45rw8lr57M%252C_%253BacO52QhZgFlZGM%252CI6T7rRsDxx0FFM%252C_%253BqOKU8cJmIovd_M%252CUbnUdnkV_9gCAM%252C_%253BiaO1V0H2WkkmSM%252CSxV0kqikbdH78M%252C_%253BfPKm6UmkDSOfnM%252C4tOBjec_Kk-vLM%252C_%253B1PegI0QmWK5pXM%252CebmRt7hlKsx7pM%252C_%253BvsQcEQl3j5glOM%252C9tdlu8LyCRNZjM%252C_%253BVYXKIWCcBdT77M%252CKd49BTtv6eDHVM%252C_%253BENUC_M3gRZCbWM%252CplcbBEW-zQM07M%252C_&usg=AI4_-kQ7GlLtL0M3XZmpWAtTWH6ZVxmkcA&sa=X&ved=2ahUKEwiS-OfBtq35AhU0LqYKHSBiBEwQ9QF6BAgPEAE#imgrc=sM4YeQ9ZVs7wIM"/> -->
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-light" style="text-align: center;">
                <div class="mainForm" v-loading="loading">
              <div class="inputWarp">
                <label>Tên hiển thị <span class="required">*</span></label>
                <el-input v-model="name"></el-input>
                <div v-if="this.errorName !== '' " class="error">
                  <span> {{ errorName }} </span>
                </div>
              </div>
              <div class="inputWarp">
                <label>Email <span class="required">*</span></label>
                <el-input type="email" v-model="email"></el-input>
                <div v-if="this.errorEmail !== '' " class="error">
                  <span> {{ errorEmail }} </span>
                </div>
              </div>
              <div class="inputWarp">
                <label>Số điện thoại </label>
                <el-input v-model="phone"></el-input>
                <div v-if="this.errorPhone !== '' " class="error">
                  <span> {{ errorPhone }} </span>
                </div>
              </div>
              <div class="inputWarp">
                <label>Địa chỉ</label>
                <el-input type="textarea" :rows="5" v-model="address"></el-input>
                <div v-if="errorAddress !== '' " class="error">
                  <span> {{ errorAddress }} </span>
                </div>
              </div>
            </div>
            <div class="footerForm">
              <el-button type="primary" icon="el-icon-check" @click="handleUpdateInfo">Lưu</el-button>
            </div>
            </div>
        </el-col>
    </el-row>
    </el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style>
.el-tabs__nav-wrap {
 display: flex;
    justify-content: center;
}
.img-avatar {
 border-radius: 50%;
}
.mainForm {
 width: 500px;
 text-align: initial;
    padding-top: 100px;
}
</style>