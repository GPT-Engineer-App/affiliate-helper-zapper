import React, { useState } from "react";
import { Box, Heading, Text, VStack, Button, Image, Wrap, WrapItem, Tooltip, useToast } from "@chakra-ui/react";
import { FaQuestion, FaShare, FaChartLine } from "react-icons/fa";

const TEMPLATES = [
  {
    id: 1,
    name: "Social Media Automation",
    description: "Automatically post affiliate content to multiple social platforms.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwwfHx8fDE3MTE0OTUzNzR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Affiliate Link Tracking",
    description: "Track affiliate link clicks in Google Analytics.",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzExNDk1Mzc1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Email Subscriber Engagement",
    description: "Send automated emails to subscribers with new affiliate offers.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZ3xlbnwwfHx8fDE3MTE0OTUzNzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const toast = useToast();

  const startWorkflow = () => {
    // TODO: Implement interactive workflow builder
    toast({
      title: "Coming Soon",
      description: "The interactive workflow builder is coming soon!",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const viewSuggestions = () => {
    // TODO: Implement optimization suggestions
    toast({
      title: "Coming Soon",
      description: "Optimization suggestions are coming soon!",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const shareWorkflow = () => {
    // TODO: Implement community sharing
    toast({
      title: "Coming Soon",
      description: "Community sharing is coming soon!",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={8}>
        Zapier Workflow Assistant for Affiliate Marketing
      </Heading>
      <Text fontSize="xl" mb={12}>
        Streamline your affiliate marketing efforts with our AI-powered workflow assistant. Choose from pre-built templates or create your own custom workflows.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        Pre-Built Affiliate Marketing Templates
      </Heading>
      <Wrap spacing={8}>
        {TEMPLATES.map((template) => (
          <WrapItem key={template.id}>
            <Box borderWidth={1} borderRadius="lg" p={4} _hover={{ shadow: "md" }} cursor="pointer" onClick={() => setSelectedTemplate(template)}>
              <Image src={template.image} alt={template.name} mb={4} />
              <Heading as="h3" size="md" mb={2}>
                {template.name}
              </Heading>
              <Text>{template.description}</Text>
            </Box>
          </WrapItem>
        ))}
      </Wrap>

      {selectedTemplate && (
        <Box mt={12}>
          <Heading as="h2" size="lg" mb={4}>
            {selectedTemplate.name}
          </Heading>
          <Text mb={4}>{selectedTemplate.description}</Text>
          <VStack align="stretch" spacing={4}>
            <Button colorScheme="blue" size="lg" onClick={startWorkflow} leftIcon={<FaQuestion />}>
              Start Interactive Workflow
            </Button>
            <Button colorScheme="green" size="lg" onClick={viewSuggestions} leftIcon={<FaChartLine />}>
              View Optimization Suggestions
            </Button>
            <Tooltip label="Share your workflow with the community" placement="top">
              <Button colorScheme="purple" size="lg" onClick={shareWorkflow} leftIcon={<FaShare />}>
                Share Workflow
              </Button>
            </Tooltip>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Index;
