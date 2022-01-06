/* eslint-disable */
/* @ts-ignore */

import colors from 'src/constants/colors';

/**
 *
 * @type {IParticlesParams}
 */
const perticlesConfig: any = {
  particles: {
    number: {
      value: 2,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: colors.common.primaryGreenishColor,
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 300,
      color: '#19a974',
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 4,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.4,
        },
      },
      bubble: {
        distance: 800,
        size: 80,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 1,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default perticlesConfig;
