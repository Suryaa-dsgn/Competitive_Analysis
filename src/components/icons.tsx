// Domain icon map. All icons are Phosphor, regular weight.
import {
  Buildings,
  ChartLineUp,
  FlowArrow,
  Funnel,
  ShieldCheck,
  Target,
  UsersThree,
  type IconProps,
} from "@phosphor-icons/react";
import type { CompetitorId, DiscussionIcon, TakeawayIcon } from "../data/research";

const competitorIcons = { providertrust: ShieldCheck, symplr: Buildings, medallion: FlowArrow };

export function CompetitorIcon({ id, ...props }: IconProps & { id: CompetitorId }) {
  const Icon = competitorIcons[id];
  return <Icon aria-hidden {...props} />;
}

export const takeawayIcons: Record<TakeawayIcon, typeof ShieldCheck> = {
  trust: ShieldCheck,
  automate: FlowArrow,
  focus: Target,
};

export const discussionIcons: Record<DiscussionIcon, typeof ShieldCheck> = {
  segment: UsersThree,
  advantage: ShieldCheck,
  benchmark: ChartLineUp,
  pipeline: Funnel,
};
