<script setup lang="ts">
import { computed, ref, watchEffect, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { locale } from "../../../i18n/store";
import { t } from "../../../i18n/utils/translate";
import AppearingText from "../../../components/AppearingText.vue";
import { BREAKPOINTS } from "../../../utils/sizes";
import { Vector3 } from "three";
import ProjectedElement from "../../../components/ProjectedElement.vue";

const point = new Vector3(0.75, 2.75, 6.75);

const wrapperRef = ref<HTMLDivElement | null>(null);
const timelines = ref<{ timeline: gsap.core.Timeline; delay: number }[]>([]);
const subRefs = ref<HTMLParagraphElement[]>([]);
let matchMedia: gsap.MatchMedia | null = null;

const emit = defineEmits<{
  "timeline:created": [timeline: gsap.core.Timeline];
}>();

watchEffect((onInvalidate) => {
  const wrapperEl = wrapperRef.value;
  if (!wrapperEl) return;

  if (matchMedia) {
    matchMedia.revert();
    matchMedia = null;
  }

  matchMedia = gsap.matchMedia();

  matchMedia.add(
    {
      isMobile: `(max-width: ${BREAKPOINTS.md - 1}px)`,
      isDesktop: `(min-width: ${BREAKPOINTS.md}px)`,
    },
    (context) => {
      const { conditions } = context;
      const { isMobile } = conditions as { isMobile: boolean; isDesktop: boolean };

      const tl = gsap.timeline({
        paused: true,
      });

      // Only animate clipPath on desktop
      if (!isMobile) {
        tl.fromTo(
          wrapperEl,
          { clipPath: "inset(0% 100% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.4, ease: "none" },
          0,
        );
      } else {
        // On mobile, ensure clipPath is set to visible immediately
        gsap.set(wrapperEl, { clipPath: "inset(0% 0% 0% 0%)" });
      }

      for (let i = 0; i < timelines.value.length; i++) {
        const item = timelines.value[i];
        if (!item) continue;
        tl.add(() => {
          item.timeline.restart(true);
        }, item.delay + 0.25);
      }

      // Only fade in on desktop
      if (!isMobile && subRefs.value.length > 0) {
        const subItems = subRefs.value.filter((ref) => ref !== null && ref !== undefined);
        if (subItems.length > 0) {
          tl.fromTo(subItems, { opacity: 0 }, { opacity: 1, duration: 0.2, stagger: 0.1 }, 0.3);
        }
      } else if (isMobile && subRefs.value.length > 0) {
        // On mobile, ensure opacity is 1 immediately
        const subItems = subRefs.value.filter((ref) => ref !== null && ref !== undefined);
        if (subItems.length > 0) {
          gsap.set(subItems, { opacity: 1 });
        }
      }

      emit("timeline:created", tl);

      // Return cleanup function
      return () => {
        tl.kill();
      };
    },
  );

  onInvalidate(() => {
    if (matchMedia) {
      matchMedia.revert();
      matchMedia = null;
    }
  });
});

onBeforeUnmount(() => {
  if (matchMedia) {
    matchMedia.revert();
  }
});

const handleTimelineCreated = (timeline: gsap.core.Timeline, delay: number) => {
  const updatedTimelines = [...timelines.value, { timeline, delay }];
  timelines.value = updatedTimelines;
};

type SkillCategory = {
  title: string;
  colorClass: string;
  skills: string[];
};

const SERVICES_ES: SkillCategory[] = [
  { title: "LENGUAJES", colorClass: "blue", skills: ["JavaScript (ES6+)", "PHP", "Python", "Java", "HTML5 / CSS3", "SQL"] },
  { title: "FRONTEND", colorClass: "blue", skills: ["React.js", "Vue.js", "Tailwind CSS", "SASS", "Diseño responsivo"] },
  { title: "BACKEND", colorClass: "blue", skills: ["Laravel", "Django", "Django REST Framework", "REST API"] },
  { title: "BASES DE DATOS", colorClass: "blue", skills: ["MySQL", "PostgreSQL", "SQL Server"] },
  { title: "QA & TESTING", colorClass: "blue", skills: ["Pytest", "Selenium", "Postman", "Pruebas manuales", "Diseño de casos de prueba"] },
  { title: "DEVOPS & HERRAMIENTAS", colorClass: "blue", skills: ["Git / GitHub", "GitHub Actions", "CI/CD", "DigitalOcean", "AWS", "Docker (básico)"] },
];

const SERVICES_EN: SkillCategory[] = [
  { title: "LANGUAGES", colorClass: "blue", skills: ["JavaScript (ES6+)", "PHP", "Python", "Java", "HTML5 / CSS3", "SQL"] },
  { title: "FRONTEND", colorClass: "blue", skills: ["React.js", "Vue.js", "Tailwind CSS", "SASS", "Responsive Design"] },
  { title: "BACKEND", colorClass: "blue", skills: ["Laravel", "Django", "Django REST Framework", "REST API"] },
  { title: "DATABASES", colorClass: "blue", skills: ["MySQL", "PostgreSQL", "SQL Server"] },
  { title: "QA & TESTING", colorClass: "blue", skills: ["Pytest", "Selenium", "Postman", "Manual Testing", "Test Case Design"] },
  { title: "DEVOPS & TOOLS", colorClass: "blue", skills: ["Git / GitHub", "GitHub Actions", "CI/CD", "DigitalOcean", "AWS", "Docker (basic)"] },
];

const services = computed(() => {
  return locale.value === "en" ? SERVICES_EN : SERVICES_ES;
});
</script>

<template>
  <ProjectedElement :point="point">
    <div ref="wrapperRef" class="box-services">
      <div class="box-services-content">
        <div class="box-services-title">
          <AppearingText
            :text="t('services')"
            :steps="1"
            :duration="0.35"
            @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0)"
          />
        </div>
        
        <div class="box-services-categories">
          <div v-for="(category, cIndex) in services" :key="category.title" class="skill-category">
            <h4 class="skill-category-title">
              <AppearingText
                :text="category.title"
                :steps="1"
                :duration="0.35"
                @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0.15 + cIndex * 0.1)"
              />
            </h4>
            <div class="skill-list notranslate">
              <span 
                v-for="skill in category.skills" 
                :key="skill" 
                :class="['skill-pill', `skill-pill-${category.colorClass}`]"
              >
                <AppearingText
                  :text="skill"
                  :steps="1"
                  :duration="0.35"
                  @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0.2 + cIndex * 0.1)"
                />
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </ProjectedElement>
</template>

<style scoped lang="scss">
.box-services {
  --line-length: min(48px, calc(var(--svw) * 5));

  position: absolute;
  bottom: var(--count-height);
  width: calc(100% - var(--space-outer) * 2);
  left: var(--space-outer);

  @include mixins.landscape {
    width: 480px;
    max-width: calc(var(--svw) * 45);
    padding-left: var(--line-length);
    position: relative;
    left: 0;
    bottom: 0;
    padding-top: 3px;
    transform: translate(0, -50%);
  }

  @include mixins.landscape-large {
    width: 420px;
    max-width: calc(var(--svw) * 40);
  }

  &::after,
  &::before {
    display: none;

    @include mixins.landscape {
      display: block;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 11px;
    height: 11px;
    background-color: var(--color-cyan-400);
    border-radius: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 0;
    border-top: var(--stroke-sm) solid var(--color-cyan-400);

    @include mixins.landscape {
      width: var(--line-length);
    }
  }

  &-content {
    border: var(--stroke-sm) solid var(--color-cyan-400);
    border-radius: var(--radius-md);
    background: linear-gradient(to bottom, var(--color-hologram-top) 0%, var(--color-hologram-bottom) 100%);
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;

    @include mixins.landscape {
      padding: var(--space-sm) var(--space-md);
      gap: var(--space-sm);
    }
  }

  &-title {
    font-size: var(--font-size-title-xs);
    font-weight: 700;
    margin-bottom: 4px;

    @include mixins.landscape {
      font-size: var(--font-size-title-xxs);
      margin-bottom: var(--space-xxs);
    }

    @include mixins.landscape-large {
      font-size: var(--font-size-title-xs);
    }
  }

  &-categories {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @include mixins.landscape {
      gap: var(--space-sm);
    }
  }
}

.skill-category {
  display: flex;
  flex-direction: column;
  gap: 4px;

  &-title {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: var(--color-text-cyan-400);
    opacity: 0.8;

    @include mixins.landscape {
      font-size: 10px;
    }

    @include mixins.landscape-large {
      font-size: 11px;
    }
  }
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  @include mixins.landscape {
    gap: 6px;
  }
}

.skill-pill {
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 12px;
  color: var(--color-white-400);
  background-color: rgba(255, 255, 255, 0.1); /* fallback */
  white-space: nowrap;

  @include mixins.landscape {
    font-size: 11px;
    padding: 4px 10px;
  }

  @include mixins.landscape-large {
    font-size: 12px;
    padding: 4px 12px;
  }

  &-blue {
    background-color: #1a4b8c;
  }
  &-teal {
    background-color: #0d5c46;
  }
  &-purple {
    background-color: #4c3a8c;
  }
  &-brown {
    background-color: #8c3a20;
  }
  &-orange {
    background-color: #8c5a0a;
  }
  &-green {
    background-color: #2a5a0a;
  }
}
</style>
