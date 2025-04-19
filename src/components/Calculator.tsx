import { mailchimp } from "@/app/resources";
import {
  Background,
  Button,
  Flex,
  Heading,
  Input,
  Row,
  Text,
} from "@/once-ui/components";
import { Column } from "@/once-ui/components/Column";

export const Calculator = () => {
  return (
    <Column
      overflow="hidden"
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-medium"
    >
      <Background
        mask={{
          cursor: mailchimp.effects.mask.cursor,
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
          opacity: mailchimp.effects.gradient.opacity as
            | 0
            | 10
            | 20
            | 30
            | 40
            | 50
            | 60
            | 70
            | 80
            | 90
            | 100,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          color: mailchimp.effects.dots.color,
          size: mailchimp.effects.dots.size as any,
          opacity: mailchimp.effects.dots.opacity as any,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width as any,
          height: mailchimp.effects.grid.height as any,
          opacity: mailchimp.effects.grid.opacity as any,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as any,
        }}
      />
      <Column>
        <Heading
          style={{ position: "relative" }}
          marginBottom="s"
          variant="display-strong-xs"
        >
          Kalkulacka
        </Heading>
      </Column>
      <Column fillWidth gap="20">
        <Row fillWidth gap="8">
          <Flex fillWidth direction="column" gap="8">
            <Text align="start">Why:</Text>
            <Input id="name" label="Jméno" value="1" />
          </Flex>
          <Flex fillWidth direction="column" gap="8">
            <Text align="start">Why:</Text>
            <Input id="name" label="Jméno" value="1" />
          </Flex>
        </Row>
        <Row fillWidth gap="8">
          <Flex fillWidth direction="column" gap="8">
            <Text align="start">Why:</Text>
            <Input id="name" label="Jméno" value="1" />
          </Flex>
          <Flex fillWidth direction="column" gap="8">
            <Text align="start">Why:</Text>
            <Input id="name" label="Jméno" value="1" />
          </Flex>
        </Row>
      </Column>
      <Row
        fillWidth
        horizontal="space-between"
        vertical="center"
        marginTop="20"
      >
        <Button id="sendMail" arrowIcon type="submit" label="calculate" />
        <Text>123</Text>
      </Row>

      {/* <Column fillWidth gap="8">
        <Text align="start">Why:</Text>
        <Row gap="4">
          <Input id="name" label="Jméno" value="1" />
          <Input id="surname" label="Příjmení" value="123" />
        </Row>
        <Row gap="4">
          <Input id="email" label="Email" value="123" type="email" />
          <Input id="email" label="Email" value="123" type="email" />
        </Row>
        <Row>
          <Input
            id="phone"
            label="Telefonní číslo"
            value="123"
            type="tel"
            inputMode="tel"
          />
        </Row>
        <Row>
          <Input
            id="phone"
            label="Telefonní číslo"
            value="123"
            type="tel"
            inputMode="tel"
          />
        </Row>
        <Button
          id="sendMail"
          arrowIcon
          fillWidth
          type="submit"
          label="calculate"
        />
      </Column> */}
    </Column>
  );
};
