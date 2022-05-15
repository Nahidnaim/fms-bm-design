<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Invoice-detail component
 */
export default {
  page: {
    title: "Task List",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Task List",
      items: [
        {
          text: "Task",
          href: "/"
        },
        {
          text: "Task List",
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
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">

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
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
