<template>
  <body data-spy="scroll" data-target="#header">
    <nav id="header" class="navbar navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="fa fa-bars"></span>
          </button>
          <a class="navbar-brand" href="#">SocialApp</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse navbar-right">
          <ul class="nav navbar-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#register">Register</a></li>
            <!-- <li><a href="#features">Features</a></li> -->
          </ul>
        </div>
      </div>
    </nav>
    <div id="register">
      <div class="container" style="margin-top:120px">
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3 wow fadeInDown"  wow fadeInDown data-wow-delay="1.5s" data-wow-duration="2.0s" data-wow-offset="10">
            <h1 style="text-align:center">STUDENT REGISTRATION PAGE !!!</h1>
            <form @submit.prevent="validateBeforeSubmit" action="/backend" method="post">
              <div class="form-group" id="div">
                <div class="col-is6 column ix-12">
                        <p class="control has-icon has-icon-right">
                            <input name="Firstname"  v-model="Student.Firstname" v-validate="{required : true, regex: /^([A-Za-z]+)$/, min:3}" :class="{'input': true, 'is-danger': errors.has('Firstname') }" type="text" placeholder="First name">
                            <i v-show="errors.has('Firstname')" class="fa fa-warning"></i>
                            <span v-show="errors.has('Firstname')" class="help is-danger">{{ errors.first('Firstname') }}</span>
                        </p>
                </div>
                <div class="col-is-6 column ix-12">
                  <p class="control has-icon has-icon-right">
                    <input name="Lastname" v-model="Student.Lastname" v-validate="{required : true, regex: /^([A-Za-z]+)$/, min:3}" :class="{'input': true, 'is-danger': errors.has('Lastname') }" type="text" placeholder="Last name">
                    <i v-show="errors.has('Lastname')" class="fa fa-warning"></i>
                    <span v-show="errors.has('Lastname')" class="help is-danger">{{ errors.first('Lastname') }}</span>
                  </p>
                </div>
              </div>
              <div class="column is-12">
                  <p class="control has-icon has-icon-right">
                      <input name="gender" v-model="Student.gender" v-validate="{required : true, regex: /^([A-Za-z]+)$/, min:4}" :class="{'input': true, 'is-danger': errors.has('gender') }" type="text" placeholder="Gender">
                      <i v-show="errors.has('gender')" class="fa fa-warning"></i>
                      <span v-show="errors.has('gender')" class="help is-danger">{{ errors.first('gender') }}</span>
                  </p>
              </div>
              <div class="column is-12">
                  <p class="control has-icon has-icon-right">
                      <input name="course" v-model="Student.course" v-validate="{required : true, regex: /^([A-Z a-z]+)$/, min:7}" :class="{'input': true, 'is-danger': errors.has('course') }" type="text" placeholder="Course of study">
                      <i v-show="errors.has('course')" class="fa fa-warning"></i>
                      <span v-show="errors.has('course')" class="help is-danger">{{ errors.first('course') }}</span>
                  </p>
              </div>
               <div class="column is-12">
                  <p class="control has-icon has-icon-right">
                      <input name="email" v-model="Student.email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
                      <i v-show="errors.has('email')" class="fa fa-warning"></i>
                      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                  </p>
              </div>
              <div class="column is-12">
                  <p class="control has-icon has-icon-right">
                      <input name="matric" v-model="Student.matric" v-validate="{required : true, regex: /^([0-9]+)$/, min:6 , max:11}":class="{'input': true, 'is-danger': errors.has('matric') }" type="text" placeholder="Matriculation number">
                      <i v-show="errors.has('matric')" class="fa fa-warning"></i>
                      <span v-show="errors.has('matric')" class="help is-danger">{{ errors.first('matric') }}</span>
                  </p>
              </div>

              <div class="column is-12">
                    <p class="control has-icon has-icon-right">
                        <input name="password" v-model="Student.password" v-validate="'required|min:6'" :class="{'input': true, 'is-danger': errors.has('password') }" type="password" placeholder="Password">
                        <i v-show="errors.has('password')" class="fa fa-warning"></i>
                        <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
                    </p>
              </div>
              <div class="column is-12">
                  <p class="control">
                    <center>
                      <button class="button is-primary" type="submit" >Submit</button>
                    </center>
                  </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
          <p class="text-center no-s">2017 &copy; Modern by .............</p>
      </div>
    </footer>  
  </body>
</template>

<script>
import swal from 'bootstrap-sweetalert'
import $http from 'vue-resource'
export default {
  name: 'app',
    data () {
      return {
        Student: {
          Firstname : '',
          Lastname : '',
          gender : '',
          course : '',
          email : '',
          matric : '',
          password : ''
        }
      }
    },
    methods: {
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            swal(" ", "Registeration successful !", "success")
            let newStudent = {
              Firstname: this.Student.Firstname,
              Lastname: this.Student.Lastname,
              gender: this.Student.gender,
              course: this.Student.course,
              email:  this.Student.email,
              matric: this.Student.matric,
              password: this.Student.password,
            }
          this.$http.post('http://localhost:3000/users', newStudent)
            .then((response) =>{
              window.location="/backend";
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
          }
        })  
      }
    }
}
</script>
<style type="text/css">
  #submit{
    padding: 20px;
    margin-bottom :20px;
  }
</style>



