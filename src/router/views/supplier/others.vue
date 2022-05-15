<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Invoice-detail component
 */
export default {
  page: {
    title: "Others Service List",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Others Service List",
      items: [
        {
          text: "Supplier",
          href: "/"
        },
        {
          text: "Others Service List",
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

            <div class="table-responsive">
              <table class="table table-striped mb-0">
                <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>lorem ipsum</td>
                  <td>lorem dorem horem</td>
                  <td>01487541565</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>lorem ipsum</td>
                  <td>lorem dorem horem</td>
                  <td>01487541565</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>lipis ipsum</td>
                  <td>upoasd dorem horem</td>
                  <td>01487541565</td>
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
