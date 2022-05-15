<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";
import {userMethods, taskMethods, projectMethods} from "@/state/helpers"
import Switches from "vue-switches";

import Multiselect from "vue-multiselect";
import DatePicker from "vue2-datepicker";

// validation rules import
import {
  required,
} from "vuelidate/lib/validators";
import {mapGetters, mapState} from "vuex";


/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Task",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: {
    Layout,
    PageHeader,
    Multiselect,
    DatePicker,
    Switches
  },
  data() {
    return {
      title: "Task",
      items: [
        {
          text: "Task",
          href: "/",
        },
        {
          text: "Create",
          active: true,
        },
      ],
      isLoading: false,
      formSubmit: false,
      task: {
        title: "",
        // project: "",
        // user: "",
        isRepeatable: false,
        duration: "",
        deadline: "",
        precedence: "",
        status: "",
        mark: null,
      },
      statusOption: ["pending", "running", "completed", "overdue", "canceled"],
      // precedenceOption: ["normal", "low", "high"],
      enabled: false,
    };
  },
  computed: {
    ...mapState("auth", ["currentUser"]),
    ...mapGetters("user", ["users"]),
    ...mapGetters("project", ["projects"]),
  },
  validations: {
    task: {
      title: { required },
      project: { required },
      // duration: { required },
      deadline: { required },
      precedence: { required },
      status: { required },
    }
  },
  methods: {
    ...userMethods,
    ...taskMethods,
    ...projectMethods,
    onSubmit() {
      this.formSubmit = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        this.isLoading = true;
        this.createTask(this.task).then(response => {
          this.isLoading = false;
          // eslint-disable-next-line no-console
          if(response.success === true){
            this.$toast.open({
              message: response.msg,
              duration: 3000,
              type: "success",
            })
          } else{
            this.$toast.open({
              message: "Task create failed.",
              duration: 3000,
              type: "error",
            })
          }
        })
      }
    }
  },
  created() {
    this.fetchUser()
    this.fetchProject()
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Create Task</h4>
        <p class="card-title-desc">
        </p>

        <form action="#" @submit.prevent="onSubmit">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label>Task Title</label>
                <input
                    v-model="task.title"
                    type="text"
                    class="form-control"
                    placeholder="Task title"
                    name="name"
                    :class="{ 'is-invalid': formSubmit && $v.task.title.$error }"
                />
                <div v-if="formSubmit && $v.task.title.$error" class="invalid-feedback">
                  <span v-if="!$v.task.title.required">Task title is required.</span>
                </div>
              </div>
            </div>
            <!-- end col -->
<!--            <div class="col-lg-6">-->
<!--              <div class="form-group">-->
<!--                <label>Project</label>-->
<!--                <multiselect v-model="task.project"-->
<!--                             :options="projects"-->
<!--                             placeholder="Select project"-->
<!--                             label="name" track-by="_id"-->
<!--                             :class="{ 'is-invalid': formSubmit && $v.task.project.$error }"-->
<!--                ></multiselect>-->
<!--                <div v-if="formSubmit && $v.task.project.$error" class="invalid-feedback">-->
<!--                  <span v-if="!$v.task.project.required">Please select a project.</span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
            <!-- end col -->
<!--            <template v-if="currentUser">-->
<!--              <div class="col-lg-6" v-if="currentUser.role === 'admin' ||  currentUser.role === 'team leader'">-->
<!--                <div class="form-group" >-->
<!--                  <label>Assigned To</label>-->
<!--                  <multiselect v-model="task.user"-->
<!--                               :options="users"-->
<!--                               placeholder="Assign one"-->
<!--                               label="name" track-by="_id"-->
<!--                               :class="{ 'is-invalid': formSubmit && $v.task.user.$error }"-->
<!--                  ></multiselect>-->
<!--                  <div v-if="formSubmit && $v.task.user.$error" class="invalid-feedback">-->
<!--                    <span v-if="!$v.task.user.required">This value is required.</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              &lt;!&ndash; end col &ndash;&gt;-->
<!--            </template>-->
<!--            <div class="col-lg-6">-->
<!--              <div class="form-group">-->
<!--                <label>Precedence</label>-->
<!--                <multiselect v-model="task.precedence"-->
<!--                             :options="precedenceOption"-->
<!--                             placeholder="Select precedence"-->
<!--                             :class="{ 'is-invalid': formSubmit && $v.task.precedence.$error }"-->
<!--                ></multiselect>-->
<!--                <div v-if="formSubmit && $v.task.precedence.$error" class="invalid-feedback">-->
<!--                  <span v-if="!$v.task.precedence.required">This value is required.</span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
            <!-- end col -->
            <div class="col-lg-6">
              <div class="form-group">
                <label>Status</label>
                <multiselect v-model="task.status"
                             :options="statusOption"
                             placeholder="Select one"
                             :class="{ 'is-invalid': formSubmit && $v.task.status.$error }"
                ></multiselect>
                <div v-if="formSubmit && $v.task.status.$error" class="invalid-feedback">
                  <span v-if="!$v.task.status.required">This value is required.</span>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="form-group d-flex align-items-center">
                    <label>Task Repeatable</label>
                    <!--                <switches v-model="enabled" type-bold="true" class="mb-0"></switches>-->
                    <switches v-model="enabled" type-bold="false" color="primary" class="ml-3 mb-0"></switches>
                  </div>
                </div>
                <!-- end col -->
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Task Deadline</label>
                    <date-picker v-model="task.deadline"
                                 append-to-body lang="en"
                                 :class="{ 'is-invalid': formSubmit && $v.task.deadline.$error }"
                    ></date-picker>
                    <div v-if="formSubmit && $v.task.deadline.$error" class="invalid-feedback">
                      <span v-if="!$v.task.deadline.required">Task deadline can't be empty.</span>
                    </div>
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- row end -->
            </div>
          </div>
          <div class="form-group">
            <label>Description</label>
            <div>
              <textarea
                  v-model="task.description"
                  class="form-control"
                  placeholder="Description"
                  name="description"
                  rows="5"
              ></textarea>
            </div>
          </div>
          <div class="form-group mb-0 d-flex">
            <button type="submit" class="btn btn-primary" :disabled="isLoading">Submit</button>
            <div class="spinner-grow text-primary m-1" role="status" v-if="isLoading">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- end card -->
  </Layout>
</template>

<style lang="scss">
.is-invalid{
  .multiselect__tags, .mx-input{
    border-color: #f46a6a !important;
  }
}
</style>
