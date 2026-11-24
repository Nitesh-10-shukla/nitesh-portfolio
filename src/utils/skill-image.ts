import type { StaticImageData } from "next/image";

import aws from "@/assets/svg/skills/aws.svg";
import bootstrap from "@/assets/svg/skills/bootstrap.svg";
import cicd from "@/assets/svg/skills/cicd.svg";
import css from "@/assets/svg/skills/css.svg";
import docker from "@/assets/svg/skills/docker.svg";
import express from "@/assets/svg/skills/express.svg";
import figma from "@/assets/svg/skills/figma.svg";
import gcp from "@/assets/svg/skills/gcp.svg";
import git from "@/assets/svg/skills/git.svg";
import graphql from "@/assets/svg/skills/graphql.svg";
import html from "@/assets/svg/skills/html.svg";
import javascript from "@/assets/svg/skills/javascript.svg";
import jest from "@/assets/svg/skills/jest.svg";
import linux from "@/assets/svg/skills/linux.svg";
import materialui from "@/assets/svg/skills/materialui.svg";
import mongoDB from "@/assets/svg/skills/mongoDB.svg";
import mysql from "@/assets/svg/skills/mysql.svg";
import nextJS from "@/assets/svg/skills/nextJS.svg";
import nodejs from "@/assets/svg/skills/node.svg";
import oauth from "@/assets/svg/skills/auth.svg";
import postgresql from "@/assets/svg/skills/postgresql.svg";
import react from "@/assets/svg/skills/react.svg";
import redux from "@/assets/svg/skills/redux.svg";
import seo from "@/assets/svg/skills/seo.svg";
import stripe from "@/assets/svg/skills/stripe.svg";
import tailwind from "@/assets/svg/skills/tailwind.svg";
import typescript from "@/assets/svg/skills/typescript.svg";
import vitejs from "@/assets/svg/skills/vitejs.svg";

const skillImages: Record<string, StaticImageData | string> = {
  apollo: graphql,
  aws,
  bootstrap,
  cicd,
  css,
  docker,
  express,
  figma,
  gcp,
  git,
  graphql,
  html,
  javascript,
  jest,
  linux,
  materialui,
  mongodb: mongoDB,
  mysql,
  nestjs: nodejs,
  nextjs: nextJS,
  nodejs,
  oauth,
  postgresql,
  react,
  redux,
  seo,
  sql: mysql,
  stripe,
  tailwind,
  tanstack: "/tenstack.png",
  typescript,
  vitejs,
};

/**
 * Returns the logo for a skill, or `null` when there isn't one — callers render
 * a monogram tile instead, which looks deliberate rather than like a broken
 * icon or a repeated generic placeholder.
 */
export const getSkillImage = (icon?: string): StaticImageData | string | null => {
  if (!icon) return null;
  return skillImages[icon.toLowerCase()] ?? null;
};
