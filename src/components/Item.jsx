import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  Center,
  Flex
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
function currencyFormat(num) {
  return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const Item = ({ id, name, description_short, price, image }) => {
  return (
    <div>
      <div key={id}>
        <Flex>
          <Card maxW="sm">
            <CardBody>
            <Image src={image} width={250} />
              <Stack mt="6" spacing="3">
              <Heading size="sm">{name}</Heading>
                <Text>{description_short}</Text>
                <Text color="blue.600" fontSize="2xl">
                  {price + ".-"}
                </Text>
              </Stack>
            </CardBody >
            <Divider />
            <CardFooter>
              <Center className="btn-center">
                <Button variant="solid" colorScheme="blue">
                  <Link to={`/item/${id}`}>Details</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Flex>
      </div>
    </div>
  )
}

export default Item
