<template>

    <div class="uk-margin">
        <div class="uk-grid pk-grid-large" data-uk-grid-margin>
            <div class="uk-flex-item-1">
                <div class="uk-form-horizontal uk-margin">
                    <div class="uk-form-row">
                        <label for="form-title" class="uk-form-label">{{ 'Title' | trans }}</label>

                        <div class="uk-form-controls">
                            <input id="form-title" class="uk-width-1-1 uk-form-large" type="text" name="title"
                                   v-model="project.title" v-valid="required">
                        </div>
                        <p class="uk-form-help-block uk-text-danger" v-show="form.title.invalid">{{ 'Please enter a
                            title' | trans }}</p>
                    </div>

                    <div class="uk-form-row">
                        <label for="form-subtitle" class="uk-form-label">{{ 'Subtitle' | trans }}</label>

                        <div class="uk-form-controls">
                            <input id="form-subtitle" class="uk-width-1-1" type="text" name="subtitle"
                                   v-model="project.subtitle">
                        </div>
                    </div>
                </div>


                <div class="uk-form-stacked uk-margin">
                    <div class="uk-form-row">
                        <span class="uk-form-label">{{ 'Intro' | trans }}</span>

                        <div class="uk-form-controls">
                            <v-editor id="form-intro" value="{{@ project.intro }}"
                                      options="{{ {markdown : project.data.markdown, height: 250} }}"></v-editor>
                        </div>
                    </div>

                    <div class="uk-form-row">
                        <span class="uk-form-label">{{ 'Content' | trans }}</span>

                        <div class="uk-form-controls">
                            <v-editor id="form-content" value="{{@ project.content }}"
                                      options="{{ {markdown : project.data.markdown} }}"></v-editor>
                        </div>
                    </div>
                </div>

            </div>
            <div class="pk-width-sidebar pk-width-sidebar-large uk-form-stacked">

                <div class="uk-form-row">
                    <label for="form-slug" class="uk-form-label">{{ 'Slug' | trans }}</label>

                    <div class="uk-form-controls">
                        <input id="form-slug" class="uk-width-1-1" type="text" v-model="project.slug">
                    </div>
                </div>

                <div class="uk-form-row">
                    <label for="form-client" class="uk-form-label">{{ 'Client' | trans }}</label>

                    <div class="uk-form-controls">
                        <input id="form-client" class="uk-width-1-1" type="text" v-model="project.client">
                    </div>
                </div>

                <div class="uk-form-row">
                    <span class="uk-form-label">{{ 'Date' | trans }}</span>
                    <div class="uk-form-controls">
                        <input-date datetime="{{@ project.date}}"></input-date>
                    </div>
                </div>

                <div class="uk-form-row">
                    <span class="uk-form-label">{{ 'Tags' | trans }}</span>
                    <div class="uk-form-controls">
                        <input-tags tags="{{@ project.tags}}" existing="{{ tags }}"></input-tags>
                    </div>
                </div>

                <div class="uk-form-row">
                    <span class="uk-form-label">{{ 'Options' | trans }}</span>
                    <div class="uk-form-controls uk-form-controls-text">
                        <label>
                            <input type="checkbox" value="markdown" v-model="project.data.markdown"> {{ 'Enable Markdown' |
                            trans }}</label>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

    module.exports = {

        inherit: true

    };

</script>
