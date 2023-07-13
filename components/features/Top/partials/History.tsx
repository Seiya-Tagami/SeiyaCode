import { Image } from '@/components/libs/Image'
import { sortByDate } from '@/components/libs/dayjs'
import {
  Box,
  Card,
  CardBody,
  Heading,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react'
import React, { FC } from 'react'

export type THistory = {
  history_id: string
  title: string
  description: string
  img_url: string
  start_date: string
  created_at: string
}

type HistoryProps = {
  content: THistory[]
}
export const History: FC<HistoryProps> = (props) => {
  const { content } = props

  const { activeStep } = useSteps({
    index: content.length - 1,
    count: content.length,
  })

  return (
    <Box mt={10}>
      <Heading as='h2' fontSize='2xl'>
        🐳やってきたこと
      </Heading>
      <Card size={'md'} mt={8} bg={'gray.100'}>
        <CardBody>
          <Stepper
            index={activeStep}
            minHeight={140 * content.length}
            colorScheme={'green'}
            orientation='vertical'
            gap='0'
          >
            {content.length
              ? sortByDate<THistory>(content).map((step, index) => (
                  <Step key={index}>
                    <StepIndicator>
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    </StepIndicator>

                    <Box flexShrink='0' w={[240, 360]}>
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription>{step.description}</StepDescription>
                      <Image src={step.img_url} width={160} height={100} alt='languages' />
                    </Box>

                    <StepSeparator />
                  </Step>
                ))
              : 'Sorry... No data fetched'}
          </Stepper>
        </CardBody>
      </Card>
    </Box>
  )
}
