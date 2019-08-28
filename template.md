title: {{title}}
speaker: {{speaker}}
prismTheme: {{theme}}
{{#if plugins }}
plugins:
  {{#each this }}
    - {{this}}
  {{/each}}
{{/if}}

<slide class="bg-apple aligncenter">

{{title}} {.text-landing.text-shadow}
By {{speaker}} {.text-intro}
