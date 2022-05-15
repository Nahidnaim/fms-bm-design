<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Invoice-detail component
 */
export default {
  page: {
    title: "Project Single",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Project Single",
      items: [
        {
          text: "Project",
          href: "/"
        },
        {
          text: "Project Single",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-6">
        <div class="card w-100">
          <div class="card-body">
            <div class="media align-items-center  mb-3">
              <div class="avatar-md mr-4">
                <span class="avatar-title rounded-circle bg-light text-danger cus-font-size">
                  <i class="fas fa-house-user fa-3x"></i>
                </span>
              </div>
              <div class="media-body overflow-hidden">
                <h5 class="text-truncate font-size-15 mt-2 text-uppercase mb-2 font-weight-bold">Project Name Here</h5>
                <p class="text-muted">
                  <i class="fas fa-map-marker-alt mr-1"></i> House 27, road 02, Gulshan Niketon, Dhaka
                </p>
              </div>
            </div>
            <p class="text-muted mb-3 cus-fixed-height">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ipsam vero. Aspernatur dolore
              explicabo itaque maxime molestiae necessitatibus perferendis soluta veniam.
              Commodi ex fugiat illo iure odio ratione reiciendis, sed?
            </p>
            <div class="d-flex justify-content-between">
              <!-- created date -->
              <div class="text-muted">
                <i class="fas fa-calendar-alt mr-1 text-primary"></i> <b>Created At</b>
                <p class="mt-2 mb-0">May 04, 2022</p>
              </div>
            </div>
            <div class="mt-4">
              <h5 class="text-truncate font-size-14 mb-3">Building Manager</h5>
              <div class="media align-items-center">
                <a href="javascript: void(0);" class="team-member d-inline-block">
                  <img :src="require('@/assets/images/users/avatar-5.jpg')" class="rounded-circle avatar-sm mr-2" alt />
                </a>
                <div class="media-body">
                  <h5 class="text-truncate text-uppercase font-size-15">
                    <a href="#" class="text-primary">Building Manager Name</a>
                  </h5>
                  <div><i class="fas fa-user text-muted mr-1"></i> 01458796894</div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <div class="col-6">
        <!-- stat row -->
        <div class="row">
          <!-- project col -->
          <div class="col-xl-6">
            <div class="card mini-stats-wid w-100 border">
              <div class="card-body">
                <div class="media">
                  <div class="media-body">
                    <p class="text-muted font-weight-medium">Total task</p>
                    <h4 class="mb-0 text-capitalize">18</h4>
                  </div>

                  <div class="mini-stat-icon avatar-sm align-self-center rounded-circle bg-primary">
                        <span class="avatar-title">
                          <i :class="`fas fa-clipboard-check font-size-22`"></i>
                        </span>
                  </div>
                </div>
              </div>
              <!-- end card-body -->
            </div>
            <!-- end card -->
          </div>
          <!-- end col -->
          <!-- members col -->
          <div class="col-xl-6">
            <div class="card mini-stats-wid w-100 border">
              <div class="card-body">
                <div class="media">
                  <div class="media-body">
                    <p class="text-muted font-weight-medium">Pending Task</p>
                    <h4 class="mb-0">10</h4>
                  </div>

                  <div class="mini-stat-icon avatar-sm align-self-center rounded-circle bg-warning">
                    <span class="avatar-title">
                      <i :class="`fas fa-edit font-size-22`"></i>
                    </span>
                  </div>
                </div>
              </div>
              <!-- end card-body -->
            </div>
            <!-- end card -->
          </div>
          <!-- end col -->
          <!-- task col -->
          <div class="col-xl-6">
            <div class="card mini-stats-wid w-100 border">
              <div class="card-body">
                <div class="media">
                  <div class="media-body">
                    <p class="text-muted font-weight-medium">Status</p>
                    <h4 class="mb-0">
                      Active
                    </h4>
                  </div>

                  <div class="mini-stat-icon avatar-sm align-self-center rounded-circle bg-info">
                        <span class="avatar-title">
                          <i :class="`fas fa-flag font-size-22`"></i>
                        </span>
                  </div>
                </div>
              </div>
              <!-- end card-body -->
            </div>
            <!-- end card -->
          </div>
          <!-- end col -->
          <!-- success col -->
          <div class="col-xl-6">
            <div class="card mini-stats-wid w-100 border">
              <div class="card-body">
                <div class="media">
                  <div class="media-body">
                    <p class="text-muted font-weight-medium">Success Rate</p>
                    <h4 class="mb-0">
                      <span>78%</span>
                    </h4>
                  </div>

                  <div class="mini-stat-icon avatar-sm align-self-center rounded-circle bg-success">
                        <span class="avatar-title">
                          <i :class="`fas fa-trophy font-size-22`"></i>
                        </span>
                  </div>
                </div>
              </div>
              <!-- end card-body -->
            </div>
            <!-- end card -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Common Tasks</h5>
            <div class="table-responsive mb-0">
              <table class="table table-centered table-nowrap">
                <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>IsRepeatable</th>
                  <th>Due Date</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody >
                <tr>
                  <td>1</td>
                  <td>
                    <h5 class="text-truncate font-size-14 text-capitalize">
                      Task One
                    </h5>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                  </td>
                  <td>
                    <span class="badge badge-light">Pending</span>
                  </td>
                  <td>
                    <span>No</span>
                  </td>
                  <td>May 16, 2022</td>
                  <td>
                    <b-dropdown class="card-drop" variant="white" right toggle-class="p-0">
                      <template v-slot:button-content>
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </template>
                      <b-dropdown-item href="javascript: void(0);">View Details</b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">Edit</b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">Delete</b-dropdown-item>
                    </b-dropdown>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <h5 class="text-truncate font-size-14 text-capitalize">
                      Task two
                    </h5>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                  </td>
                  <td>
                    <span class="badge badge-light">Pending</span>
                  </td>
                  <td>
                    <span>No</span>
                  </td>
                  <td>May 16, 2022</td>
                  <td>
                    <b-dropdown class="card-drop" variant="white" right toggle-class="p-0">
                      <template v-slot:button-content>
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </template>
                      <b-dropdown-item href="javascript: void(0);">View Details</b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">Edit</b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">Delete</b-dropdown-item>
                    </b-dropdown>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <h5 class="text-truncate font-size-14 text-capitalize">
                      Task Three
                    </h5>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                  </td>
                  <td>
                    <span class="badge badge-light">Pending</span>
                  </td>
                  <td>
                    <span>Yes</span>
                  </td>
                  <td>May 16, 2022</td>
                  <td>
                    <b-dropdown class="card-drop" variant="white" right toggle-class="p-0">
                      <template v-slot:button-content>
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </template>
                      <b-dropdown-item href="javascript: void(0);">View Details</b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">Edit</b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">Delete</b-dropdown-item>
                    </b-dropdown>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- card end -->
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Building Tasks</h5>
            <div class="table-responsive mb-0">
              <table class="table table-centered table-nowrap">
                <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>IsRepeatable</th>
                  <th>Due Date</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody >
                <tr>
                  <td>1</td>
                  <td>
                    <h5 class="text-truncate font-size-14 text-capitalize">
                      Task One
                    </h5>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                  </td>
                  <td>
                    <span class="badge badge-light">Pending</span>
                  </td>
                  <td>
                    <span>No</span>
                  </td>
                  <td>May 16, 2022</td>
                  <td>
                    <b-dropdown class="card-drop" variant="white" right toggle-class="p-0">
                      <template v-slot:button-content>
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </template>
                      <b-dropdown-item href="javascript: void(0);">View Details</b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">Edit</b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">Delete</b-dropdown-item>
                    </b-dropdown>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <h5 class="text-truncate font-size-14 text-capitalize">
                      Task two
                    </h5>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                  </td>
                  <td>
                    <span class="badge badge-light">Pending</span>
                  </td>
                  <td>
                    <span>No</span>
                  </td>
                  <td>May 16, 2022</td>
                  <td>
                    <b-dropdown class="card-drop" variant="white" right toggle-class="p-0">
                      <template v-slot:button-content>
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </template>
                      <b-dropdown-item href="javascript: void(0);">View Details</b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">Edit</b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">Delete</b-dropdown-item>
                    </b-dropdown>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <h5 class="text-truncate font-size-14 text-capitalize">
                      Task Three
                    </h5>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                  </td>
                  <td>
                    <span class="badge badge-light">Pending</span>
                  </td>
                  <td>
                    <span>Yes</span>
                  </td>
                  <td>May 16, 2022</td>
                  <td>
                    <b-dropdown class="card-drop" variant="white" right toggle-class="p-0">
                      <template v-slot:button-content>
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </template>
                      <b-dropdown-item href="javascript: void(0);">View Details</b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">Edit</b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">Delete</b-dropdown-item>
                    </b-dropdown>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- card end -->
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
