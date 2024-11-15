import React, { useEffect, useTransition } from "react";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";

import SectionWrapper from "@/components/SectionWrapper";
import SectionContainer from "@/components/SectionContainer";
import StyledTextInput from "@/components/StyledTextInput";
import StyledIconButton from "@/components/StyledIconButton";
import { usePathname } from "@/i18n/routing";

type SearchPageInputType = {
  query?: string;
};

const SearchPageInput = ({ query }: SearchPageInputType) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    mode: "controlled",
    initialValues: {
      search: query,
    },
  });

  const handleSubmit = ({ query, event }: { query?: string; event?: any }) => {
    if (event) event.preventDefault();
    const newUrl = `${pathname}?query=${encodeURIComponent(query)}`;
    startTransition(() => {
      router.push(newUrl);
      router.refresh();
    });
  };

  useEffect(() => {
    form.setValues((prev) => ({
      ...prev,
      query: query?.toString() || undefined,
    }));
  }, [query]);

  return (
    <SectionWrapper>
      <SectionContainer padding="XL">
        <form
          onSubmit={form.onSubmit((values, event) =>
            handleSubmit({ query: values.search, event }),
          )}
        >
          <StyledTextInput
            placeholder="Czego szukasz?"
            leftSection={<IconSearch stroke="1px" width={24} height={24} />}
            rightSection={
              <StyledIconButton
                type="submit"
                icon={<IconArrowRight stroke="1px" width={24} height={24} />}
              />
            }
            name="search"
            key={form.key("search")}
            {...form.getInputProps("search")}
          />
        </form>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default SearchPageInput;
