import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { MonsterService } from "../client";
import { MonsterResponse } from "../client/models/MonsterResponse";
import { ColorKey, getColor } from "../colors";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import { useTextColor } from "../hooks/useTextColor";
import { FlexCol, FlexRow, H1 } from "../stylePrimitives";

const SkillName = styled.span`
  font-weight: 1.25em;
  margin: 0.25em 0;
`;
const SkillGroup = styled(FlexCol)``;
const SkillHeader = styled.span`
  font-size: 1.25em;
`;

export const MonsterPage = () => {
  useBackgroundColor(getColor(ColorKey.BACKGROUND));
  useTextColor(getColor(ColorKey.TEXT));

  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState({} as MonsterResponse);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const asyncEffect = async () => {
      const p = await MonsterService.get(id!);
      setData(p);
      setDataLoaded(true);
    };

    asyncEffect();
  }, [id, setDataLoaded]);

  return dataLoaded ? (
    <FlexCol gap="1em">
      <FlexRow gap="1em">
        <img alt="icon" src="img/ph_monster_icon.webp" />
        <FlexCol>
          <span>
            {data.monster_id} | Types: {data.type1},{data.type2},{data.type3}
          </span>
          <span>{data.name_en}</span>
        </FlexCol>
      </FlexRow>
      <FlexRow gap="2em">
        <FlexCol gap="1em">
          <span>Awoken Skills</span>
          <span>
            {data.awakenings.map((a) => (
              <span>{a.awakening_id} | </span>
            ))}
          </span>
          <span>Super awoken Skills</span>
          <span>
            {data.awakenings.map((a) => (
              <span>{a.awakening_id} | </span>
            ))}
          </span>
          <span>Latents [{data.latent_slots} slots]</span>
          <span>
            {data.awakenings.map((a) => (
              <span>{a.awakening_id} | </span>
            ))}
          </span>

          <span>
            Rarity: {data.rarity} <BsFillStarFill /> (base {data.rarity}???)
          </span>
          <span>Cost: {data.cost}</span>
          <span>Series: {data.series.name_en}</span>
          <span>{data.in_rem}</span>
        </FlexCol>
        <FlexCol gap="1em">
          <SkillGroup>
            <SkillHeader>Active Skill</SkillHeader>
            <SkillName>
              {data.active_skill.name_en} (
              {data.active_skill.cooldown_turns_max} -&gt;{" "}
              {data.active_skill.cooldown_turns_min} turns)
            </SkillName>
            <span>{data.active_skill.desc_en}</span>
          </SkillGroup>
          <SkillGroup>
            <SkillHeader>Leader Skill</SkillHeader>
            <SkillName>{data.leader_skill.name_en}</SkillName>
            <span>{data.leader_skill.desc_en}</span>
          </SkillGroup>
        </FlexCol>
      </FlexRow>
    </FlexCol>
  ) : (
    <H1>Loading...</H1>
  );
};
