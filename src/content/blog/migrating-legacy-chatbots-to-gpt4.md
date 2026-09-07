---
title: "Lessons Learned Migrating Production University Chatbots to GPT-4"
description: "Key strategies, prompt engineering patterns, and fallback safeguards when scaling Azure OpenAI to thousands of students."
pubDate: 2024-06-10
tags: ["OpenAI", "React", "Azure", "NLP"]
---

# Lessons Learned Migrating Production Chatbots to GPT-4

During my tenure at **Softtek**, our team was tasked with modernizing a university AI chatbot that served thousands of active students daily. The legacy system relied on rigid intent-matching pipelines that struggled with ambiguous questions and natural conversation flow.

Here are the key lessons learned while migrating the chatbot to **GPT-4 via Azure OpenAI**.

---

## 1. Grounding Responses with Strict System Prompts

Large language models excel at fluent generation, but in an academic setting, accuracy regarding enrollment deadlines, tuition, and degree requirements is non-negotiable.

We engineered rigid prompt guardrails:
* **Source-of-truth grounding**: Responses must strictly reference verified university knowledge docs.
* **Polite fallback policies**: If an inquiry falls outside verified documents, the model gracefully redirects students to academic advisors rather than guessing.

## 2. Low-Latency UI with Streaming & React Islands

Students expect instant feedback. Waiting 3–5 seconds for a full response degrades UX.

We transitioned the frontend chat widget to:
* **Server-Sent Events (SSE)** streaming tokens directly into the React chat view.
* **Astro Island hydration** to keep the parent landing pages 100% static and lightning fast, hydrating only the interactive chat widget when the user clicks to open it.

## 3. Comprehensive Testing with TDD & Storybook

Before going live to thousands of concurrent users:
* Implemented unit & integration tests using **Jest** and **React Testing Library**.
* Built edge-case scenarios into **Storybook** (e.g., handling network timeouts, markdown tables, long code blocks, mobile viewports).

The result was a drastic reduction in support tickets and an exponential increase in student satisfaction.
