title: {{title}}
speaker: {{speaker}}
prismTheme: {{theme}}
{{plugins.toString()}}
{{#if plugins }}
plugins:
  {{#each plugins }}
    - {{this}}
  {{/each}}
{{/if}}

{{title}} {.text-landing.text-shadow}
By {{speaker}} {.text-intro}
