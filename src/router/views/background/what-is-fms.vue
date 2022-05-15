<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Invoice-detail component
 */
export default {
  page: {
    title: "What is FMS?",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "What is FMS?",
      items: [
        {
          text: "Background",
          href: "/"
        },
        {
          text: "What is FMS?",
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
            <div>
<!--              <h4 class="card-title mb-5">General Questions</h4>-->
              <div class="faq-box media mb-4">
                <div class="faq-icon mr-3">
                  <i class="bx bx-help-circle font-size-20 text-success"></i>
                </div>
                <div class="media-body">
                  <h5 class="font-size-15">Lorem ipsum FMS?</h5>
                  <p
                      class="text-muted"
                  >New common language will be more simple and regular than the existing European languages. It will be as simple as occidental.</p>
                </div>
              </div>
              <div class="faq-box media mb-4">
                <div class="faq-icon mr-3">
                  <i class="bx bx-help-circle font-size-20 text-success"></i>
                </div>
                <div class="media-body">
                  <h5 class="font-size-15">Where does it come from?</h5>
                  <p
                      class="text-muted"
                  >Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                </div>
              </div>
              <div class="faq-box media mb-4">
                <div class="faq-icon mr-3">
                  <i class="bx bx-help-circle font-size-20 text-success"></i>
                </div>
                <div class="media-body">
                  <h5 class="font-size-15">Where can I get some?</h5>
                  <p
                      class="text-muted"
                  >If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                </div>
              </div>
              <div class="faq-box media mb-4">
                <div class="faq-icon mr-3">
                  <i class="bx bx-help-circle font-size-20 text-success"></i>
                </div>
                <div class="media-body">
                  <h5 class="font-size-15">Why do we use it?</h5>
                  <p
                      class="text-muted"
                  >Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                </div>
              </div>
              <div class="faq-box media">
                <div class="faq-icon mr-3">
                  <i class="bx bx-help-circle font-size-20 text-success"></i>
                </div>
                <div class="media-body">
                  <h5 class="font-size-15">Where can I get some?</h5>
                  <p
                      class="text-muted"
                  >To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental</p>
                </div>
              </div>
            </div>

            <div class="d-print-none">
              <div class="float-right">
                <a href="javascript:window.print()" class="btn btn-success">
                  <i class="fa fa-print"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
