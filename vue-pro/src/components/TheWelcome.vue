<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>First Step</template>

    I firstly observed the codes, the folders and sub-coders as any pro-coder 
    would do 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Second Step</template>

    Having observed closely the projects,, I was able to edit just the header 
    and would then find way through the images, sub-folders and others. The Next 
    subcomponent I changed was the logo and therefore alter the Header-Body. Next, 
    the list on the right side of the page, the contents(this) and then the Title
     of the Page.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Third Step</template>

   Added a Button functionality and tested. soon to edit the UI and made other 
   test changes or make it a playground.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Fourth Step </template>
    Mastering the templates as it is the building block for sub and main sections 
    and pages, and also the fact that every tenplate has dotVue(.vue) as the name.
    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    This is not yet established.
   
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Other</template>

    This is also not yet established.
   
  </WelcomeItem>
</template>
