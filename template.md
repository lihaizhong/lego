title: {{title}}
speaker: {{speaker}}
prismTheme: {{theme}}
{{#if plugins && plugins.length }}
plugins:
  {{#each plugins }}
    - {{this}}
  {{/each}}
{{/if}}

{{title}} {.text-landing.text-shadow}
By {{speaker}} {.text-intro}
