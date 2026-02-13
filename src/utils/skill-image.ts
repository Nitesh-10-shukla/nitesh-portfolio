import html from '@/assets/svg/skills/html.svg';
import css from '@/assets/svg/skills/css.svg';
import javascript from '@/assets/svg/skills/javascript.svg';
import typescript from '@/assets/svg/skills/typescript.svg';
import vitejs from '@/assets/svg/skills/vitejs.svg';
import nodejs from '@/assets/svg/skills/node.svg';
import express from '@/assets/svg/skills/express.svg';
import nextJS from '@/assets/svg/skills/nextJS.svg';
import redux from '@/assets/svg/skills/redux.svg';
import cicd from '@/assets/svg/skills/cicd.svg';
import stripe from '@/assets/svg/skills/stripe.svg';
import seo from '@/assets/svg/skills/seo.svg';
import oauth from '@/assets/svg/skills/auth.svg';
import react from '@/assets/svg/skills/react.svg';
import defaultIcon from '@/assets/svg/skills/development.svg';
import mysql from '@/assets/svg/skills/mysql.svg';
import graphql from '@/assets/svg/skills/graphql.svg';
import tailwind from '@/assets/svg/skills/tailwind.svg';
import mongoDB from '@/assets/svg/skills/mongoDB.svg';
import jest from '@/assets/svg/skills/jest.svg';
import git from '@/assets/svg/skills/git.svg';
import aws from '@/assets/svg/skills/aws.svg';
import bootstrap from '@/assets/svg/skills/bootstrap.svg';
import figma from '@/assets/svg/skills/figma.svg';
import materialui from '@/assets/svg/skills/materialui.svg';
import linux from '@/assets/svg/skills/linux.svg'
import postgresql from '@/assets/svg/skills/postgresql.svg';
import pytorch from '@/assets/svg/skills/pytorch.svg';
import python from '@/assets/svg/skills/python.svg';

export const getSkillImage = (icon: string) => {
  const skillIcon = icon.toLowerCase();
  const skillImages: any = {
    'html': html,
    'css': css,
    'javascript': javascript,
    'typescript': typescript,
    'postgresql': postgresql,
    'nestjs': nodejs,
    'python': python,
    'pytorch': pytorch,
    'react': react,
    'react native': react,
    'vitejs': vitejs,
    'nextjs': nextJS,
    'tailwind': tailwind,
    'nodejs': nodejs,
    'express': express,
    'mongodb': mongoDB,
    'graphql': graphql,
    'apollo': graphql,
    'tanstack': '/tenstack.png',
    'jest': jest,
    'mysql': mysql,
    'git': git,
    'aws': aws,
    'bootstrap': bootstrap,
    'figma': figma,
    'materialui': materialui,
    'zustand': defaultIcon,
    'redux': redux,
    'cicd': cicd,
    'stripe': stripe,
    'sql': mysql,
    'seo': seo,
    'oauth': oauth,
    'linux': linux
  };

  return skillImages[skillIcon] || defaultIcon;
};