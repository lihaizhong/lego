title: {{title}}
speaker: {{speaker}}
prismTheme: {{theme}}
{{#if extensions }}
plugins:
  {{#each extensions }}
    - {{this}}
  {{/each}}
{{/if}}

<slide class="bg-apple aligncenter">

{{title}} {.text-landing.text-shadow}
By {{speaker}} {.text-intro}
