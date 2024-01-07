package ma.dnaengineering.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JobSummaryDTO {

    private Long id;

    private String title;

    private Float averageSalary;
}
