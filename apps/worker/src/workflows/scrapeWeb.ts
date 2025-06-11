import {
  WorkflowEntrypoint,
  WorkflowEvent,
  WorkflowStep,
} from "cloudflare:workers";

export class MyWorkflow extends WorkflowEntrypoint<Cloudflare, Params> {
  async run(event: WorkflowEvent<Params>, step: WorkflowStep) {}
}
