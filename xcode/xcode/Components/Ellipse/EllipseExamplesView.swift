
import SwiftUI

struct EllipseExamplesView: View {
    var body: some View {
        List {
            Ellipse()
                .fill(Color.orange)
                .frame(width: 150, height: 100)
                .navigationTitle("Default Ellipse")
            
            Ellipse()
                .stroke(Color.brown, lineWidth: 2)
                .frame(width: 150, height: 100)
                .navigationTitle("Stroked Ellipse")
            
            Ellipse()
                .fill(Color.cyan)
                .frame(width: 100, height: 150)
                .navigationTitle("Vertical Ellipse")
        }
        .navigationTitle("Ellipse Examples")
    }
}

struct EllipseExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        EllipseExamplesView()
    }
}
