<template>
	<div class="panel panel-info" style="margin-top:20px">
    	<div class="panel-heading">
    		<div class="row">
    			<div class="col-lg-6 col-md-6 col-sm-6" style="margin-top:10px">
    				<h1> {{ msg }}</h1>
    			</div>
    			<router-link to="/">
	    			<div class="col-lg-6 col-md-6 col-sm-6" style="padding-top:0px">  				
						<button type="button" class="btn btn-info btn-lg pull-right">
						  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Back
						</button>
	    			</div>
	    		</router-link>
        	</div>
    	</div>
		<div class="panel-body" >
			<div class="table responsive">
				<table class="table table-hover table-bordered">
					<thead>
						<tr>
							<th> # </th>
							<th> First name </th>
							<th> Last name</th>
							<th> Gender </th>
							<th> Course of study </th>
							<th> Email</th>
							<th> Matriculation Number </th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody  id="table">
						<tr v-for="(backend_data,id) in backend">
							<td><span class="glyphicon glyphicon-hand-right"></span></td>
							<td>{{backend_data.Firstname}}</td>
							<td>{{backend_data.Lastname}}</td>
							<td>{{backend_data.gender}}</td>
							<td>{{backend_data.course}}</td>
							<td>{{backend_data.email}}</td>
							<td>{{backend_data.matric}}</td>
							<td>
								<span class="glyphicon glyphicon-pencil" data-toggle="modal" data-target="#myModal" v-on:click="Edit(id)"></span>
							</td>
							<td>
								<span class="glyphicon glyphicon-trash" name="del" v-on:click="DeleteUser(id)"></span>
							</td>
						</tr>
					</tbody>
					<!-- Modal -->
					<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div class="modal-dialog">
					    	<div class="modal-content">
					      		<div class="modal-header">
							        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							        <h4 class="modal-title text-info" id="myModalLabel" >{{title}}</h4>
					      		</div>
					      		<div class="modal-body">
									<form @submit.prevent="validateBeforeSubmit" method="post">
										<div class="form-group">
											<div class="col-is6 column ix-12">
										        <p class="control has-icon has-icon-right">
										            <input name="Firstname"  v-model="edit.Firstname" v-validate="{required : true, regex: /^([A-Za-z]+)$/, min:3}" :class="{'input': true, 'is-danger': errors.has('Firstname') }" type="text" placeholder="First name">
										            <i v-show="errors.has('Firstname')" class="fa fa-warning"></i>
										            <span v-show="errors.has('Firstname')" class="help is-danger">{{ errors.first('Firstname') }}</span>
										        </p>
										    </div>
										     <div class="col-is-6 column ix-12">
										        <p class="control has-icon has-icon-right">
										            <input name="Lastname" v-model="edit.Lastname" v-validate="{required : true, regex: /^([A-Za-z]+)$/, min:3}" :class="{'input': true, 'is-danger': errors.has('Lastname') }" type="text" placeholder="Last name">
										            <i v-show="errors.has('Lastname')" class="fa fa-warning"></i>
										            <span v-show="errors.has('Lastname')" class="help is-danger">{{ errors.first('Lastname') }}</span>
										        </p>
										    </div>
									    </div>
									    <div class="column is-12">
									        <p class="control has-icon has-icon-right">
									            <input name="gender"  v-model="edit.gender" v-validate="{required : true, regex: /^([A-Za-z]+)$/, min:4}" :class="{'input': true, 'is-danger': errors.has('gender') }" type="text" placeholder="Gender">
									            <i v-show="errors.has('gender')" class="fa fa-warning"></i>
									            <span v-show="errors.has('gender')" class="help is-danger">{{ errors.first('gender') }}</span>
									        </p>
									    </div>
									    <div class="column is-12">
									        <p class="control has-icon has-icon-right">
									            <input name="course" v-model="edit.course" v-validate="{required : true, regex: /^([A-Z a-z]+)$/, min:7}" :class="{'input': true, 'is-danger': errors.has('course') }" type="text" placeholder="Course of study">
									            <i v-show="errors.has('course')" class="fa fa-warning"></i>
									            <span v-show="errors.has('course')" class="help is-danger">{{ errors.first('course') }}</span>
									        </p>
									    </div>
									     <div class="column is-12">
									        <p class="control has-icon has-icon-right">
									            <input name="email"  v-model="edit.email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
									            <i v-show="errors.has('email')" class="fa fa-warning"></i>
									            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
									        </p>
									    </div>
									    <div class="column is-12">
									        <p class="control has-icon has-icon-right">
									            <input name="matric" v-model="edit.matric" v-validate="{required : true, regex: /^([0-9]+)$/, min:6 , max:11}":class="{'input': true, 'is-danger': errors.has('matric') }" type="text" placeholder="Matriculation number">
									            <i v-show="errors.has('matric')" class="fa fa-warning"></i>
									            <span v-show="errors.has('matric')" class="help is-danger">{{ errors.first('matric') }}</span>
									        </p>
									    </div>
				
									    <div class="column is-12">
								            <p class="control has-icon has-icon-right">
								                <input name="password"  v-model="edit.password" v-validate="'required|min:6'" :class="{'input': true, 'is-danger': errors.has('password') }" type="password" placeholder="Password">
								                <i v-show="errors.has('password')" class="fa fa-warning"></i>
								                <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
								            </p>
									    </div>
									    <div class="column is-12">
									        <p class="control">
									        	<center>	
									        	
									            <button class="button is-primary" type="submit" id="submit">Submit</button>
									     			
									        	</center>
									        </p>
									    </div>
									</form>
					      		</div>
					    	</div>
					  	</div>
					</div>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import swal from 'bootstrap-sweetalert'
import $ from 'jquery'
import $http from 'vue-resource'
// $(document).ready(function() {  
// 	$("#submit").click(function(){
//     $("#myModal").hide();
//   });
// });

export default {
	name: 'back',
	data(){
		return{
			msg: 'Administrator Page',
			title: 'Edit User Details',
			close: 'cancel',
			save:' save changes',
			id: this.$route.params.id,
			backend:[],
			edit:{}
		}
	},
	methods:{
		DeleteUser(id){
			swal({
			  	title: "Are you sure?",
			  	text: "You will not be able to recover this record!",
			  	type: "warning",
			  	showCancelButton: true,
			  	confirmButtonClass: "btn-danger",
			  	confirmButtonText: "Yes, delete it!",
			  	cancelButtonText: "No, cancel plx!",
			  	closeOnConfirm: false,
			  	closeOnCancel: true
			},
			function() {
					this.$http.delete('http://localhost:3000/users/'+ id)
		            .then(response => {
		            	this.backend.splice(id, 1);
		              	console.log(response);   
			    swal(" ", "Your record has been deleted.", "success");
			  	}) 
			}.bind(this)); 	
        },

        Edit(id) {
	        	let Edit = {
            	Firstname: this.edit.Firstname,
              	Lastname: this.edit.Lastname,
              	gender: this.edit.gender,
              	course: this.edit.course,
              	email:  this.edit.email,
              	matric: this.edit.matric,
              	password: this.edit.password,
            	}
        	this.$http.post('http://localhost:3000/users', Edit)
            .then((response) =>{
              console.log(response);
              window.location="/backend";
            })
            .catch((error) => {
              console.log(error);
            })
        },
        validateBeforeSubmit(){
	        this.$validator.validateAll().then((result) => {
		        if (result) {
		        	swal({
						title: "Sweet!",
						text: "Update Successful.",
						imageUrl: 'src/assets/images/thumbs-up.jpg'
					});
		      	}})
	    	}
	    },
        
	mounted(){
		this.$http.get('http://localhost:3000/users')
          .then((response) =>{
            console.log(response.data);
            this.backend = response.data; 
        })
          .catch((error) => {
            console.log(error);
        }); 
	}
}
</script>