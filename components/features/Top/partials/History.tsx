import { Image } from '@/components/libs/Image'
import {
  Box,
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

type HistoryProps = {
  content: {
    history_id: string
    title: string
    description: string
    img_url: string
    created_at: string
  }[]
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
        やってきたこと🐳
      </Heading>
      <Stepper
        index={activeStep}
        minHeight={140 * content.length}
        mt={8}
        p={4}
        bg={'gray.100'}
        colorScheme={'green'}
        orientation='vertical'
        gap='0'
        rounded={'lg'}
      >
        {content.length
          ? content.map((step, index) => (
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
    </Box>
  )
}
