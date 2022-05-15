<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Invoice-detail component
 */
export default {
  page: {
    title: "Project List",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Project List",
      items: [
        {
          text: "Project",
          href: "/"
        },
        {
          text: "Project List",
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
      <div class="col-lg-6 col-xl-3">
        <!-- Simple card -->
        <b-card :img-src="require('@/assets/images/projects/project-1.jpg')" img-alt="Card image" img-top>
          <b-card-title>
            <h5 class="card-title">
              <router-link class="text-theme-primary" :to="{ name: 'projectSingle' }">
                Project Name one
              </router-link>
            </h5>
          </b-card-title>
          <b-card-text>
            <i class="fas fa-map-marker-alt"></i> house 27, Road 02, Ghulshan Niketon, Dhaka
          </b-card-text>
        </b-card>
      </div>
      <!-- end col -->
      <div class="col-lg-6 col-xl-3">
        <!-- Simple card -->
        <b-card :img-src="require('@/assets/images/projects/project-1.jpg')" img-alt="Card image" img-top>
          <b-card-title>
            <h5 class="card-title">
              <router-link class="text-theme-primary" :to="{ name: 'projectSingle' }">
                Project Name Two
              </router-link>
            </h5>
          </b-card-title>
          <b-card-text>
            <i class="fas fa-map-marker-alt"></i> house 27, Road 02, Ghulshan Niketon, Dhaka
          </b-card-text>
        </b-card>
      </div>
      <!-- end col -->
      <div class="col-lg-6 col-xl-3">
        <!-- Simple card -->
        <b-card :img-src="require('@/assets/images/projects/project-1.jpg')" img-alt="Card image" img-top>
          <b-card-title>
            <h5 class="card-title">
              <router-link class="text-theme-primary" :to="{ name: 'projectSingle' }">
                Project Name Three
              </router-link>
            </h5>
          </b-card-title>
          <b-card-text>
            <i class="fas fa-map-marker-alt"></i> house 27, Road 02, Ghulshan Niketon, Dhaka
          </b-card-text>
        </b-card>
      </div>
      <!-- end col -->
      <div class="col-lg-6 col-xl-3">
        <!-- Simple card -->
        <b-card :img-src="require('@/assets/images/projects/project-1.jpg')" img-alt="Card image" img-top>
          <b-card-title>
            <h5 class="card-title">
              <router-link class="text-theme-primary" :to="{ name: 'projectSingle' }">
                Project Name Four
              </router-link>
            </h5>
          </b-card-title>
          <b-card-text>
            <i class="fas fa-map-marker-alt"></i> house 27, Road 02, Ghulshan Niketon, Dhaka
          </b-card-text>
        </b-card>
      </div>
      <!-- end col -->

    </div>
    <!-- end row -->
  </Layout>
</template>
